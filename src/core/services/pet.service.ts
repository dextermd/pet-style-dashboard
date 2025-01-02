import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiEndpoint} from '../constants/constants';
import {map} from 'rxjs';
import {Pet} from '../model/pet.model';

@Injectable({
  providedIn: 'root',
})

export class PetService {

  constructor(private _http: HttpClient) {}

   getAllPets() {
    return this._http.get<Pet[]>(ApiEndpoint.Pet.Pets).pipe(
      map((res: Pet[]) => {
        return res;
      })
    );
  }
}
