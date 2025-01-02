import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiEndpoint} from '../constants/constants';
import {User} from '../model/user.model';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  constructor(private _http: HttpClient) {}

   getAllUsers() {
    return this._http.get<User[]>(ApiEndpoint.User.Users).pipe(
      map((res: User[]) => {
        return res;
      })
    );
  }
}
