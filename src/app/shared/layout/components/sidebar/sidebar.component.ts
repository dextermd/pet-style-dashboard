import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild
} from '@angular/core';
// @ts-ignore
import {slideUp} from '../../../../composables/slideUp.js';
// @ts-ignore
import {slideToggle} from '../../../../composables/slideToggle.js';
import {AppSettings} from '../../../../../core/services/app-settings.service';
import {AppMenuService} from '../../../../../core/services/app-menus.service';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgClass, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {NgScrollbar} from 'ngx-scrollbar';
import {FloatSubMenuComponent} from '../float-sub-menu/float-sub-menu.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgClass,
    NgScrollbar,
    NgIf,
    NgForOf,
    NgTemplateOutlet,
    FloatSubMenuComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements AfterViewChecked  {
  menus: any[] = [];

  @ViewChild('sidebarScrollbar', { static: false }) private sidebarScrollbar: ElementRef | undefined;
  @Output() appSidebarMinifiedToggled = new EventEmitter<boolean>();
  @Output() hideMobileSidebar = new EventEmitter<boolean>();
  @Output() setPageFloatSubMenu = new EventEmitter();

  @Output() appSidebarMobileToggled = new EventEmitter<boolean>();
  @Input() appSidebarTransparent: any;
  @Input() appSidebarGrid: any;
  @Input() appSidebarFixed: any;
  @Input() appSidebarMinified: any;

  appSidebarFloatSubMenu: any;
  appSidebarFloatSubMenuHide: any;
  appSidebarFloatSubMenuHideTime = 250;
  appSidebarFloatSubMenuTop: any;
  appSidebarFloatSubMenuLeft = '60px';
  appSidebarFloatSubMenuRight: any;
  appSidebarFloatSubMenuBottom: any;
  appSidebarFloatSubMenuArrowTop: any;
  appSidebarFloatSubMenuArrowBottom: any;
  appSidebarFloatSubMenuLineTop: any;
  appSidebarFloatSubMenuLineBottom: any;
  appSidebarFloatSubMenuOffset: any;

  mobileMode;
  desktopMode;
  scrollTop: any;

  constructor(private eRef: ElementRef, public appSettings: AppSettings, private appMenuService: AppMenuService) {
    if (window.innerWidth <= 767) {
      this.mobileMode = true;
      this.desktopMode = false;
    } else {
      this.mobileMode = false;
      this.desktopMode = true;
    }
  }

  ngOnInit() {
    this.menus = this.appMenuService.getAppMenus();
  }

  toggleNavProfile(e: any) {
    e.preventDefault();

    var targetSidebar = <HTMLElement>document.querySelector('.app-sidebar:not(.app-sidebar-end)');
    var targetMenu = e.target.closest('.menu-profile');
    var targetProfile = <HTMLElement>document.querySelector('#appSidebarProfileMenu');
    var expandTime = (targetSidebar && targetSidebar.getAttribute('data-disable-slide-animation')) ? 0 : 250;

    if (targetProfile && targetProfile.style) {
      if (targetProfile.style.display == 'block') {
        targetMenu.classList.remove('active');
      } else {
        targetMenu.classList.add('active');
      }
      slideToggle(targetProfile, expandTime);
      targetProfile.classList.toggle('expand');
    }
  }

  toggleAppSidebarMinified() {
    this.appSidebarMinifiedToggled.emit(true);
    this.scrollTop = 40;
  }

  toggleAppSidebarMobile() {
    this.appSidebarMobileToggled.emit(true);
  }

  calculateAppSidebarFloatSubMenuPosition() {
    var targetTop = this.appSidebarFloatSubMenuOffset.top;
    var direction = document.body.style.direction;
    var windowHeight = window.innerHeight;

    setTimeout(() => {
      let targetElm = <HTMLElement> document.querySelector('.app-sidebar-float-submenu-container');
      if (targetElm) {
        let targetSidebar = <HTMLElement> document.getElementById('sidebar');
        var targetHeight = targetElm.offsetHeight;
        this.appSidebarFloatSubMenuRight = 'auto';
        this.appSidebarFloatSubMenuLeft = (this.appSidebarFloatSubMenuOffset.width + targetSidebar.offsetLeft) + 'px';

        if ((windowHeight - targetTop) > targetHeight) {
          this.appSidebarFloatSubMenuTop = this.appSidebarFloatSubMenuOffset.top + 'px';
          this.appSidebarFloatSubMenuBottom = 'auto';
          this.appSidebarFloatSubMenuArrowTop = '20px';
          this.appSidebarFloatSubMenuArrowBottom = 'auto';
          this.appSidebarFloatSubMenuLineTop = '20px';
          this.appSidebarFloatSubMenuLineBottom = 'auto';
        } else {
          this.appSidebarFloatSubMenuTop = 'auto';
          this.appSidebarFloatSubMenuBottom = '0';

          var arrowBottom = (windowHeight - targetTop) - 21;
          this.appSidebarFloatSubMenuArrowTop = 'auto';
          this.appSidebarFloatSubMenuArrowBottom = arrowBottom + 'px';
          this.appSidebarFloatSubMenuLineTop = '20px';
          this.appSidebarFloatSubMenuLineBottom = arrowBottom + 'px';
        }
      }

    }, 0);
  }

  showAppSidebarFloatSubMenu(menu: any, e: any) {
    if (this.appSettings.appSidebarMinified) {
      clearTimeout(this.appSidebarFloatSubMenuHide);
      this.appSidebarFloatSubMenu = menu;
      this.appSidebarFloatSubMenuOffset = e.target.getBoundingClientRect();
      this.calculateAppSidebarFloatSubMenuPosition();
    }
  }

  hideAppSidebarFloatSubMenu() {
    this.appSidebarFloatSubMenuHide = setTimeout(() => {
      this.appSidebarFloatSubMenu = '';
    }, this.appSidebarFloatSubMenuHideTime);
  }

  remainAppSidebarFloatSubMenu() {
    clearTimeout(this.appSidebarFloatSubMenuHide);
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    this.scrollTop = (this.appSettings.appSidebarMinified) ? event.srcElement.scrollTop + 40 : 0;
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('sidebarScroll', event.srcElement.scrollTop);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth <= 767) {
      this.mobileMode = true;
      this.desktopMode = false;
    } else {
      this.mobileMode = false;
      this.desktopMode = true;
    }
  }

  ngAfterViewChecked() {
    if (typeof(Storage) !== 'undefined' && localStorage['sidebarScroll']) {
      if (this.sidebarScrollbar && this.sidebarScrollbar.nativeElement) {
        this.sidebarScrollbar.nativeElement.scrollTop = localStorage['sidebarScroll'];
      }
    }
  }

  ngAfterViewInit() {
    var handleSidebarMenuToggle = function(menus: any, expandTime: any) {
      menus.map(function(menu: any) {
        menu.onclick = function(e: any) {
          e.preventDefault();
          var target = this.nextElementSibling;

          menus.map(function(m: any) {
            var otherTarget = m.nextElementSibling;
            if (otherTarget !== target) {
              slideUp(otherTarget, expandTime);
              otherTarget.closest('.menu-item').classList.remove('expand');
              otherTarget.closest('.menu-item').classList.add('closed');
            }
          });

          var targetItemElm = target.closest('.menu-item');

          if (targetItemElm.classList.contains('expand') || (targetItemElm.classList.contains('active') && !target.style.display)) {
            targetItemElm.classList.remove('expand');
            targetItemElm.classList.add('closed');
            slideToggle(target, expandTime);
          } else {
            targetItemElm.classList.add('expand');
            targetItemElm.classList.remove('closed');
            slideToggle(target, expandTime);
          }
        }
      });
    };

    var targetSidebar       = document.querySelector('.app-sidebar:not(.app-sidebar-end)');
    var expandTime          = (targetSidebar && targetSidebar.getAttribute('data-disable-slide-animation')) ? 0 : 300;
    var disableAutoCollapse = (targetSidebar && targetSidebar.getAttribute('data-disable-auto-collapse')) ? 1 : 0;

    var menuBaseSelector = '.app-sidebar .menu > .menu-item.has-sub';
    var submenuBaseSelector = ' > .menu-submenu > .menu-item.has-sub';

    // menu
    var menuLinkSelector =  menuBaseSelector + ' > .menu-link';
    var menus = [].slice.call(document.querySelectorAll(menuLinkSelector));
    handleSidebarMenuToggle(menus, expandTime);

    // submenu lvl 1
    var submenuLvl1Selector = menuBaseSelector + submenuBaseSelector;
    var submenusLvl1 = [].slice.call(document.querySelectorAll(submenuLvl1Selector + ' > .menu-link'));
    handleSidebarMenuToggle(submenusLvl1, expandTime);

    // submenu lvl 2
    var submenuLvl2Selector = menuBaseSelector + submenuBaseSelector + submenuBaseSelector;
    var submenusLvl2 = [].slice.call(document.querySelectorAll(submenuLvl2Selector + ' > .menu-link'));
    handleSidebarMenuToggle(submenusLvl2, expandTime);

  }


  expandCollapseSubmenu(menu1: any, submenu: any, rla1: RouterLinkActive) {
    return '';
  }
}
