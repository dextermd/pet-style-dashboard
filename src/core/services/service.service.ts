import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiEndpoint} from '../constants/constants';
import {firstValueFrom} from 'rxjs';
import {Service} from '../model/service.model';

@Injectable({
  providedIn: 'root',
})

export class ServiceService {

  constructor(private _http: HttpClient) {}

  async getAllServices() {
    return await firstValueFrom(this._http.get<Service[]>(ApiEndpoint.Service.Services));
  }

  async createService(service: any){
    try {
      const response = await firstValueFrom(this._http.post(ApiEndpoint.Service.Services, service));
      console.log('Услуга успешно создана:', response);
    } catch (error) {
      console.error('Ошибка при создании услуги:', error);
    }
  }

  async updateService(service: any) {
    try {
      const response = await firstValueFrom(this._http.patch(`${ApiEndpoint.Service.Services}/${service.id}`, service));
      console.log('Услуга успешно обновлена:', response);
    } catch (error) {
      console.error('Ошибка при обновлении услуги:', error);
    }
  }

  async deleteService(id: number) {
    try {
      const response = await firstValueFrom(this._http.delete(`${ApiEndpoint.Service.Services}/${id}`));
      console.log('Услуга успешно удалена:', response);
    } catch (error) {
      console.error('Ошибка при удалении услуги:', error);
    }
  }

}
