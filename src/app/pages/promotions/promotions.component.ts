import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PromotionService } from '../../../core/services/promotion.service';
import { PanelComponent } from '../../shared/layout/components/panel/panel.component';
import { RouterLink } from '@angular/router';
import {DatePipe, NgIf} from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Promotion } from '../../../core/model/promotion.model';
import {ApiEndpoint} from '../../../core/constants/constants';

declare const bootstrap: any;

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [
    NgxDatatableModule,
    PanelComponent,
    RouterLink,
    FormsModule,
    NgIf,
    DatePipe,
  ],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss'
})
export class PromotionsComponent implements OnInit {
  promotionService = inject(PromotionService);

  promotion: Promotion = {
    id: 0,
    nameRu: '',
    nameRo: '',
    descriptionRu: '',
    descriptionRo: '',
    discount: 0,
    start_date: new Date(),
    end_date: new Date(),
    image: null
  };

  @ViewChild(DatatableComponent) table: DatatableComponent | any;
  ColumnMode = ColumnMode;

  rows: unknown = [];
  temp: any = [];

  selectedImage: any;
  selectedImagePreview: string | ArrayBuffer | null = null;


  constructor() {
  }

  async ngOnInit() {
    await this.getAllPromotions();
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();

    this.rows = this.temp.filter(function (d: any) {
      return d.nameRu.toLowerCase().indexOf(val) !== -1 ||
        d.descriptionRu.toLowerCase().indexOf(val) !== -1 ||
        d.discount.toString().indexOf(val) !== -1 ||
        !val;
    });

    this.table.offset = 0;
  }

  async formSubmit(f: NgForm) {
    try {
      if (this.promotion.id) {
        console.log('Редактирование промоакции');
        await this.promotionService.updatePromotion(f.value, this.selectedImage, this.promotion.id);
      } else {
        console.log('Создание новой промоакции');
        await this.promotionService.createPromotion(f.value, this.selectedImage);

      }

      await this.getAllPromotions();

      this.promotion = {} as Promotion;
      this.closeModal();
    } catch (error) {
      console.error('Ошибка при сохранении промоакции:', error);
    }
  }

  openModalForEdit(promotion: any) {
    this.promotion = { ...promotion };
    this.promotion.start_date = promotion.start_date ? this.formatDateFromTimestamp(promotion.start_date) : null;
    this.promotion.end_date = promotion.end_date ? this.formatDateFromTimestamp(promotion.end_date) : null;
    this.selectedImage = null;
    this.selectedImagePreview = null;
  }

  openModalForCreate() {
    this.promotion = {} as Promotion;
    this.selectedImage = null;
    this.selectedImagePreview = null;
  }

  closeModal() {
    const modalElement = document.getElementById('modal-dialog');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
    this.selectedImage = null;
    this.selectedImagePreview = null;
  }

  async getAllPromotions() {
    try {
      const data = await this.promotionService.getAllPromotions();
      this.temp = [...data];
      this.rows = data;
    } catch (error) {
      console.error('Ошибка при получении данных промоакций:', error);
    }
  }

  async deletePromotion(id: number) {
    try {
      await this.promotionService.deletePromotion(id);
      await this.getAllPromotions();
    } catch (error) {
      console.error('Ошибка при удалении промоакции:', error);
    }
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  promotionImageUrl(promotion: any): string {
    return `${ApiEndpoint.ApiUrl}/uploads/promotions/${promotion.image}`;
  }

  formatDateFromTimestamp(timestamp: any): string {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
