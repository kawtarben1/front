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
  private url = 'http://localhost:8036/api/v1/' + 'typePayment/';
  public save() : Observable<TypePayment>{
    return this.http.post<TypePayment>(this.url, this.typePayment);
  }

  public deleteByCode() : Observable<number>{
    console.log('url==>' + this.url + 'code/' + this.typePayment.code);
    return this.http.delete<number>(this.url +'code/' + this.typePayment.code);
  }


  public findAll() : Observable<Array<TypePayment>>{
    return this.http.get<Array<TypePayment>>(this.url);
  }

  constructor(private http:HttpClient) { }


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
}
