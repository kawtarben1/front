import { Injectable } from '@angular/core';

import {Observable} from "rxjs";
import {Comptable} from "../model/comptable.model";
import {HttpClient} from "@angular/common/http";




@Injectable({
  providedIn: 'root'
})
export class ComptableService {
  private _comptable !: Comptable;
  private _comptables!: Array<Comptable>;
  private _url = 'http://localhost:8036/api/v1/' + 'comptable/';
  public save() : Observable<Comptable>{
    return this._http.post<Comptable>(this._url, this.comptable);
  }

  public deleteByCin() : Observable<number>{
    console.log('url==>' + this._url + 'cin/' + this.comptable.cin);
    return this._http.delete<number>(this._url +'cin/' + this.comptable.cin);
  }


  public findAll() : Observable<Array<Comptable>>{
    return this._http.get<Array<Comptable>>(this._url);
  }

  constructor(private _http:HttpClient) { }


  get comptable(): Comptable {
    if(this._comptable == null){
      this._comptable= new Comptable();
    }
    return this._comptable;
  }

  set comptable(value: Comptable) {
    this._comptable = value;
  }

  get comptables(): Array<Comptable> {
    if(this._comptables == null){
      this._comptables= new Array<Comptable>();
    }

    return this._comptables;
  }

  set comptables(value: Array<Comptable>) {
    this._comptables = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }


}
