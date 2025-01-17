import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppMenuService {
	getAppMenus() {
		return [
      {
        'icon': 'fa fa-sitemap',
        'title': 'Панель управления',
        'url': 'dashboard',
		  },
      {
        'icon': 'fa fa-calendar-days',
        'title': 'Календарь',
        'url': 'calendar'
      },
      {
        'icon': 'fa fa-users',
        'title': 'Пользователи',
        'url': 'users'
      },
      {
        'icon': 'fa fa-paw',
        'title': 'Питомцы',
        'url': 'pets'
      },
      {
        'icon': 'fa fa-scissors',
        'title': 'Услуги',
        'url': 'services'
      },
      {
        'icon': 'fa fa-percent',
        'title': 'Акции',
        'url': 'promotions'
      },
      {
        'icon': 'fa fa-address-book',
        'title': 'Записи',
        'url': 'appointments'
      },
      {
        'icon': 'fa fa-circle-question',
        'title': 'Вопросы и ответы',
        'url': 'faq'
      }
    ]
    //   {
		// 	'icon': 'fa fa-gem',
		// 	'title': 'UI Elements',
		// 	'url': '',
		// 	'caret': 'true',
		// 	'submenu': [{
		// 		'url': 'ui/general',
		// 		'title': 'General',
		// 		'highlight': 'true'
		// 	},{
		// 		'url': 'ui/typography',
		// 		'title': 'Typography'
		// 	},{
		// 		'url': 'ui/tabs-accordions',
		// 		'title': 'Tabs & Accordions'
		// 	},{
		// 		'url': 'ui/modal-notification',
		// 		'title': 'Modal & Notification',
		// 		'highlight': 'true'
		// 	},{
		// 		'url': 'ui/widget-boxes',
		// 		'title': 'Widget Boxes'
		// 	},{
		// 		'url': 'ui/media-object',
		// 		'title': 'Media Object'
		// 	},{
		// 		'url': 'ui/buttons',
		// 		'title': 'Buttons',
		// 		'highlight': 'true'
		// 	},{
		// 		'url': 'ui/icon-fontawesome',
		// 		'title': 'FontAwesome'
		// 	},{
		// 		'url': 'ui/icon-duotone',
		// 		'title': 'Duotone Icons'
		// 	},{
		// 		'url': 'ui/icon-bootstrap',
		// 		'title': 'Bootstrap Icons',
		// 		'highlight': 'true'
		// 	},{
		// 		'url': 'ui/icon-simple-line-icons',
		// 		'title': 'Simple Line Ioncs'
		// 	},{
		// 		'url': 'ui/language-icon',
		// 		'title': 'Language Icon'
		// 	},{
		// 		'url': 'ui/social-buttons',
		// 		'title': 'Social Buttons'
		// 	}]
		// }]
	}
}
