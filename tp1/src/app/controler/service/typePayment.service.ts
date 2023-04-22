import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TypePayment} from "../model/typePayment.model";

@Injectable({
  providedIn: 'root'
})
export class TypePaymentService {
  private _typePayment !: TypePayment;
  private _typePayments!: Array<TypePayment>;
  private _url = 'http://localhost:8036/api/v1/' + 'typePayment/';
  public save() : Observable<TypePayment>{
    return this._http.post<TypePayment>(this._url, this.typePayment);
  }

  public deleteByCode() : Observable<number>{
    console.log('url==>' + this._url + 'code/' + this.typePayment.code);
    return this._http.delete<number>(this._url +'code/' + this.typePayment.code);
  }


  public findAll() : Observable<Array<TypePayment>>{
    return this._http.get<Array<TypePayment>>(this._url);
  }

  constructor(private _http:HttpClient) { }


  get typePayment(): TypePayment {
    if(this._typePayment == null){
      this._typePayment= new TypePayment();
    }
    return this._typePayment;
  }

  set typePayment(value: TypePayment) {
    this._typePayment = value;
  }

  get typePayments(): Array<TypePayment> {
    if(this._typePayments == null){
      this._typePayments= new Array<TypePayment>();
    }

    return this._typePayments;
  }

  set typePayments(value: Array<TypePayment>) {
    this._typePayments = value;
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
