import {ApiEndpoint} from '../constants/constants';
import {firstValueFrom} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Faq} from '../model/faq.model';

@Injectable({
  providedIn: 'root',
})

export class FaqService {

  constructor(private _http: HttpClient) {}

  async getAllFaq() {
    return await firstValueFrom(this._http.get<Faq[]>(ApiEndpoint.Faq.Faqs));
  }

  async createFaq(faq: any){
    try {
      const response = await firstValueFrom(this._http.post(ApiEndpoint.Faq.Faqs, faq));
      console.log('faq успешно создана:', response);
    } catch (error) {
      console.error('Ошибка при создании услуги:', error);
    }
  }

  async updateFaq(faq: any) {
    try {
      const response = await firstValueFrom(this._http.patch(`${ApiEndpoint.Faq.Faqs}/${faq.id}`, faq));
      console.log('faq успешно обновлена:', response);
    } catch (error) {
      console.error('Ошибка при обновлении услуги:', error);
    }
  }

  async deleteFaq(id: number) {
    try {
      const response = await firstValueFrom(this._http.delete(`${ApiEndpoint.Faq.Faqs}/${id}`));
      console.log('faq успешно удалена:', response);
    } catch (error) {
      console.error('Ошибка при удалении услуги:', error);
    }
  }

}
