import {ApiEndpoint} from '../constants/constants';
import {firstValueFrom} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Faq} from '../model/faq.model';

@Injectable({
  providedIn: 'root',
})

export class PromotionService {

  constructor(private _http: HttpClient) {}

  async getAllPromotions() {
    return await firstValueFrom(this._http.get<Faq[]>(ApiEndpoint.Promotion.Promotions));
  }

  async createPromotion(promotion: any, file: File){
    const formData = new FormData();
    formData.append('file', file);

    Object.keys(promotion).forEach((key) => {
      if (key !== 'id') {
        formData.append(key, promotion[key]);
      }
    });

    try {
      const response = await firstValueFrom(this._http.post(ApiEndpoint.Promotion.Promotions, formData));
      console.log('Акция успешно создана:', response);
    } catch (error) {
      console.error('Ошибка при создании акции:', error);
    }
  }

  async updatePromotion(promotion: any, file: File, id: number) {
    const formData = new FormData();
    formData.append('file', file);

    Object.keys(promotion).forEach((key) => {
      formData.append(key, promotion[key]);
    });

    try {
      const response = await firstValueFrom(this._http.patch(`${ApiEndpoint.Promotion.Promotions}/${promotion.id}`, formData));
      console.log('Акция успешно обновлена:', response);
    } catch (error) {
      console.error('Ошибка при обновлении акции:', error);
    }
  }

  async deletePromotion(id: number) {
    try {
      const response = await firstValueFrom(this._http.delete(`${ApiEndpoint.Promotion.Promotions}/${id}`));
      console.log('Акция успешно удалена:', response);
    } catch (error) {
      console.error('Ошибка при удалении акции:', error);
    }
  }

}
