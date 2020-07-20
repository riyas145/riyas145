import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Idata } from './models/Idata';

@Injectable()
export class UserService {

  constructor( private http: HttpClient) { }
    private _url: string ="https://raw.githubusercontent.com/gopinav/Angular-Tutorials/master/services-and-http/src/assets/data/employees.json";
  getUser():Observable<Idata[]>{
     return this.http.get<Idata[]>(this._url);
  }
}