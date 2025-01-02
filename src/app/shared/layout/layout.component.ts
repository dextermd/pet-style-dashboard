import {Component, HostListener, inject, Injector, Renderer2} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {NavigationStart, Router, RouterOutlet} from '@angular/router';
import {AppSettings} from '../../../core/services/app-settings.service';
import {AppVariablesService} from '../../../core/services/app-variables.service';
import {TopMenuComponent} from './components/top-menu/top-menu.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {User} from '../../../core/model/user.model';
import {AuthService} from '../../../core/services/auth.service';



@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NgClass,
    RouterOutlet,
    TopMenuComponent,
    NgIf,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  authService = inject(AuthService);
  injector = inject(Injector)
  isAuthenticated = false
  user?: User;

  constructor(
    private titleService: Title,
    private router: Router,
    private renderer: Renderer2,
    public appSettings: AppSettings,
    private appVariablesService: AppVariablesService
  ) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        if (window.innerWidth < 768) {
          this.appSettings.appSidebarMobileToggled = false;
          this.appSettings.appSidebarEndMobileToggled = false;
        }
      }
    });

  }

  appHasScroll: boolean | undefined;

  appVariables: any;

  ngOnInit() {

    if (this.authService.isAuthenticated()) {
      this.isAuthenticated = true;
      this.user = this.authService.getCurrentUser();
    }

    this.appVariables = this.appVariablesService.getAppVariables();

    if (this.appSettings.appDarkMode) {
      this.onAppDarkModeChanged(true);
    }

    if (localStorage) {
      if (localStorage['appDarkMode']) {
        this.appSettings.appDarkMode = (localStorage['appDarkMode'] === 'true');
        if (this.appSettings.appDarkMode) {
          this.onAppDarkModeChanged(true);
        }
      }
      if (localStorage['appHeaderFixed']) {
        this.appSettings.appHeaderFixed = (localStorage['appHeaderFixed'] === 'true');
      }
      if (localStorage['appHeaderInverse']) {
        this.appSettings.appHeaderInverse = (localStorage['appHeaderInverse'] === 'true');
      }
      if (localStorage['appSidebarFixed']) {
        this.appSettings.appSidebarFixed = (localStorage['appSidebarFixed'] === 'true');
      }
      if (localStorage['appSidebarMinified']) {
        this.appSettings.appSidebarMinified = (localStorage['appSidebarMinified'] === 'true');
      }
      if (localStorage['appSidebarGrid']) {
        this.appSettings.appSidebarGrid = (localStorage['appSidebarGrid'] === 'true');
      }
      if (localStorage['appGradientEnabled']) {
        this.appSettings.appGradientEnabled = (localStorage['appGradientEnabled'] === 'true');
      }
    }
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    this.appHasScroll = top > 0 && this.appSettings.appHeaderFixed;
  }

  onAppSidebarMinifiedToggled(val: boolean): void {
    this.appSettings.appSidebarMinified = !this.appSettings.appSidebarMinified;
    if (localStorage) {
      localStorage['appSidebarMinified'] = this.appSettings.appSidebarMinified;
    }
  }

  onAppSidebarEndToggled(val: boolean): void {
    this.appSettings.appSidebarEndToggled = !this.appSettings.appSidebarEndToggled;
  }

  onAppSidebarMobileToggled(val: boolean): void {
    this.appSettings.appSidebarMobileToggled = !this.appSettings.appSidebarMobileToggled;
  }

  onAppSidebarEndMobileToggled(val: boolean): void {
    this.appSettings.appSidebarEndMobileToggled = !this.appSettings.appSidebarEndMobileToggled;
  }

  onAppDarkModeChanged(val: boolean): void {
    if (this.appSettings.appDarkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-bs-theme');
    }
    this.appVariables = this.appVariablesService.getAppVariables();
    this.appVariablesService.variablesReload.emit();
    document.dispatchEvent(new CustomEvent('theme-change'));
  }


  onAppThemeChanged(val: boolean): void {
    const newTheme = 'theme-' + this.appSettings.appTheme;
    for (let x = 0; x < document.body.classList.length; x++) {
      if ((document.body.classList[x]).indexOf('theme-') > -1 && document.body.classList[x] !== newTheme) {
        document.body.classList.remove(document.body.classList[x]);
      }
    }
    document.body.classList.add(newTheme);
    this.appVariables = this.appVariablesService.getAppVariables();
    this.appVariablesService.variablesReload.emit();
  }
}
