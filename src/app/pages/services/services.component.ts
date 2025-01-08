import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent, NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ServiceService} from '../../../core/services/service.service';
import {PanelComponent} from '../../shared/layout/components/panel/panel.component';
import {RouterLink} from '@angular/router';
import {NgClass, NgIf} from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';
import {Service} from '../../../core/model/service.model';

declare const bootstrap: any;

@Component({
  selector: 'app-services',
  standalone: true,
    imports: [
        NgxDatatableModule,
        PanelComponent,
        RouterLink,
        NgClass,
        FormsModule,
        NgIf
    ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  serviceService = inject(ServiceService);

  service: Service = {
    id: 0,
    nameRu: '',
    nameRo: '',
    descriptionRu: '',
    descriptionRo: '',
    price: 0,
    duration: '',
    isActive: true
  };

  @ViewChild(DatatableComponent) table: DatatableComponent | any;
  ColumnMode = ColumnMode;

  rows: unknown = [];
  temp: any = [];

  constructor() {}

  async ngOnInit() {
    await this.getAllServices();
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();

    this.rows = this.temp.filter(function (d: any) {
      return d.nameRu.toLowerCase().indexOf(val) !== -1 ||
        d.descriptionRu.toLowerCase().indexOf(val) !== -1 ||
        d.isActive.toString().toLowerCase().indexOf(val) !== -1 ||
        !val;
    });

    this.table.offset = 0;
  }

   async formSubmit(f: NgForm) {
     try {
       if (this.service.id) {
         console.log('Редактирование услуги');
         await this.serviceService.updateService(f.value);
       } else {
         console.log('Создание новой услуги');
         await this.serviceService.createService(f.value);
       }

       await this.getAllServices();

       this.service = {} as Service;
       this.closeModal();
     } catch (error) {
       console.error('Ошибка при сохранении услуги:', error);
     }
  }

  openModalForEdit(service: any) {
    this.service = { ...service };
  }

  openModalForCreate() {
    this.service = {} as Service;
  }

  closeModal() {
    const modalElement = document.getElementById('modal-dialog');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
  }

  async getAllServices() {
    try {
      const data = await this.serviceService.getAllServices();
      this.temp = [...data];
      this.rows = data;
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  }

  async deleteService(id: number) {
    try {
      await this.serviceService.deleteService(id);
      await this.getAllServices();
    } catch (error) {
      console.error('Ошибка при удалении услуги:', error);
    }
  }

  validatePriceInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9-]/g, '');
  }
}
