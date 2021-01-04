import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class EnregistrementService {

   _url = 'http://localhost:3000/enroll';

  constructor(private _http: HttpClient) { }


register (user: User) {
    return this._http.post<any>(this._url, user)

  }




}
