import {Component, inject, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent, NgxDatatableModule} from '@swimlane/ngx-datatable';
import {PanelComponent} from '../../shared/layout/components/panel/panel.component';
import {UserService} from '../../../core/services/user.service';
import {RouterLink} from '@angular/router';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgxDatatableModule,
    PanelComponent,
    RouterLink,
    NgForOf,
    NgClass,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  userServices = inject(UserService);

  @ViewChild(DatatableComponent) table: DatatableComponent | any;
  ColumnMode = ColumnMode;

  rows = [];
  temp: any = [];

  constructor() {
     this.userServices.getAllUsers().subscribe((data: any) => {
      this.temp = [...data];
      this.rows = data;
    });
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();

    this.rows = this.temp.filter(function (d: any) {
      return d.name.toLowerCase().indexOf(val) !== -1 ||
        d.email.toLowerCase().indexOf(val) !== -1 ||
        (d.phone && d.phone.toLowerCase().indexOf(val) !== -1) ||
        (d.roles && d.roles.map((r: any) => r.name).join(',').toLowerCase().indexOf(val) !== -1) ||
        !val;
    });

    this.table.offset = 0;
  }
}
