import {Component, EventEmitter, inject, Input, Output, Renderer2} from '@angular/core';
import {AppSettings} from '../../../../../core/services/app-settings.service';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {User} from '../../../../../core/model/user.model';
import {AuthService} from '../../../../../core/services/auth.service';

declare var slideToggle: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgOptimizedImage,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  authService = inject(AuthService);

  @Input() appSidebarTwo: any;
  @Input() user: User | undefined;
  @Output() appSidebarEndToggled = new EventEmitter<boolean>();
  @Output() appSidebarMobileToggled = new EventEmitter<boolean>();
  @Output() appSidebarEndMobileToggled = new EventEmitter<boolean>();

  constructor(private renderer: Renderer2, public appSettings: AppSettings) {
  }

  toggleAppSidebarMobile() {
    this.appSidebarMobileToggled.emit(true);
  }

  toggleAppSidebarEnd() {
    this.appSidebarEndToggled.emit(true);
  }

  toggleAppSidebarEndMobile() {
    this.appSidebarEndMobileToggled.emit(true);
  }

  toggleAppTopMenuMobile() {
    var target = document.querySelector('.app-top-menu');
    if (target) {
      slideToggle(target);
    }
  }

  toggleAppHeaderMegaMenuMobile() {
    this.appSettings.appHeaderMegaMenuMobileToggled = !this.appSettings.appHeaderMegaMenuMobileToggled;
  }

  ngOnDestroy() {
    this.appSettings.appHeaderMegaMenuMobileToggled = false;
  }

  logout() {
    this.authService.logout();
  }
}
