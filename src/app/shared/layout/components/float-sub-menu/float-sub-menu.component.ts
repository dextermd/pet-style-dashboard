import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AppSettings} from '../../../../../core/services/app-settings.service';
import {CommonModule, NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

declare var slideToggle: any;


@Component({
  selector: 'app-float-sub-menu',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLinkActive,
    NgClass,
    RouterLink,
    CommonModule
  ],
  templateUrl: './float-sub-menu.component.html',
  styleUrl: './float-sub-menu.component.scss'
})
export class FloatSubMenuComponent {
  @Input() menus: any;
  @Input() top: any;
  @Input() left: any;
  @Input() right: any;
  @Input() bottom: any;
  @Input() lineTop: any;
  @Input() lineBottom: any;
  @Input() arrowTop: any;
  @Input() arrowBottom: any;

  @Output() remainAppSidebarFloatSubMenu = new EventEmitter();
  @Output() hideAppSidebarFloatSubMenu = new EventEmitter();
  @Output() calculateFloatSubMenuPosition = new EventEmitter();
  @Output() calculateAppSidebarFloatSubMenuPosition = new EventEmitter<unknown>();

  constructor(public appSettings: AppSettings) {
  }

  expandCollapseSubmenu(e: any, currentMenu: any, allMenu: any, active: any) {
    e.preventDefault();
    var targetItem = (e.target).closest('.menu-item');
    var target = <HTMLElement>targetItem.querySelector('.menu-submenu');
    slideToggle(target);
    this.calculateFloatSubMenuPosition.emit();
  }

  remainMenu() {
    this.remainAppSidebarFloatSubMenu.emit(true);
  }

  hideMenu() {
    this.hideAppSidebarFloatSubMenu.emit(true);
  }
}
