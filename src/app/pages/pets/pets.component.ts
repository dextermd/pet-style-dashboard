import {Component, inject, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent, NgxDatatableModule} from '@swimlane/ngx-datatable';
import {PanelComponent} from '../../shared/layout/components/panel/panel.component';
import {RouterLink} from '@angular/router';
import {PetService} from '../../../core/services/pet.service';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [
    NgxDatatableModule,
    PanelComponent,
    RouterLink,
  ],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.scss'
})
export class PetsComponent {
  petServices = inject(PetService);

  @ViewChild(DatatableComponent) table: DatatableComponent | any;
  ColumnMode = ColumnMode;

  rows = [];
  temp: any = [];

  constructor() {
    this.petServices.getAllPets().subscribe((data: any) => {
      this.temp = [...data];
      this.rows = data;
    });
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();
    this.rows = this.temp.filter(function (d: any) {
      return d.name.toLowerCase().indexOf(val) !== -1 ||
        d.breed.toLowerCase().indexOf(val) !== -1 ||
        d.user.name && d.user.name.toLowerCase().indexOf(val) !== -1 ||
        d.user.phone && d.user.email.toLowerCase().indexOf(val) !== -1 ||
        d.user.email && d.user.email.toLowerCase().indexOf(val) !== -1 ||
        !val;
    });

    this.table.offset = 0;
  }
}
