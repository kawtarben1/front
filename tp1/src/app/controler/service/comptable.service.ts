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
  private url = 'http://localhost:8036/api/v1/' + 'comptable/';
  public save() : Observable<Comptable>{
    return this.http.post<Comptable>(this.url, this.comptable);
  }

  public deleteByCin() : Observable<number>{
    console.log('url==>' + this.url + 'cin/' + this.comptable.cin);
    return this.http.delete<number>(this.url +'cin/' + this.comptable.cin);
  }


  public findAll() : Observable<Array<Comptable>>{
    return this.http.get<Array<Comptable>>(this.url);
  }

  constructor(private http:HttpClient) { }


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
}
