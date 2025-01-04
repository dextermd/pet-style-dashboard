import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {Faq} from '../../../core/model/faq.model';
import {ColumnMode, DatatableComponent, NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FaqService} from '../../../core/services/faq.service';
import {PanelComponent} from '../../shared/layout/components/panel/panel.component';
import {RouterLink} from '@angular/router';

declare const bootstrap: any;

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    PanelComponent,
    RouterLink,
    NgxDatatableModule,
    FormsModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {
  faqService = inject(FaqService);

  faq: Faq = {
    id: 0,
    questionRu: '',
    questionRo: '',
    answerRu: '',
    answerRo: '',
  };

  @ViewChild(DatatableComponent) table: DatatableComponent | any;
  ColumnMode = ColumnMode;

  rows: unknown = [];
  temp: any = [];

  constructor() {}

  async ngOnInit() {
    await this.getAllFaq();
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();

    this.rows = this.temp.filter(function (d: any) {
      return d.questionRu.toLowerCase().indexOf(val) !== -1 ||
        d.answerRu.toLowerCase().indexOf(val) !== -1 ||
        d.isActive.toString().toLowerCase().indexOf(val) !== -1 ||
        !val;
    });

    this.table.offset = 0;
  }

  async formSubmit(f: NgForm) {
    try {
      if (this.faq.id) {
        console.log('Редактирование FAQ');
        await this.faqService.updateFaq(f.value);
      } else {
        console.log('Создание нового FAQ');
        await this.faqService.createFaq(f.value);
      }

      await this.getAllFaq();

      this.faq = {} as Faq;
      this.closeModal();
    } catch (error) {
      console.error('Ошибка при сохранении FAQ:', error);
    }
  }

  openModalForEdit(faq: any) {
    this.faq = { ...faq };
  }

  openModalForCreate() {
    this.faq = {} as Faq;
  }

  closeModal() {
    const modalElement = document.getElementById('modal-dialog');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
  }

  async getAllFaq() {
    try {
      const data: any = await this.faqService.getAllFaq();
      this.temp = [...data];
      this.rows = data;
    } catch (error) {
      console.error('Ошибка при получении данных FAQ:', error);
    }
  }

  async deleteFaq(id: number) {
    try {
      await this.faqService.deleteFaq(id);
      await this.getAllFaq();
    } catch (error) {
      console.error('Ошибка при удалении FAQ:', error);
    }
  }
}
