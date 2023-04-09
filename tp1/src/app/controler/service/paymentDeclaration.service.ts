import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PaymentDeclaration} from "../model/paymentDeclaration.model";

@Injectable({
  providedIn: 'root'
})
export class PaymentDeclarationService {
  private _paymentDeclaration !: PaymentDeclaration;
  private _paymentDeclarations!: Array<PaymentDeclaration>;
  private url = 'http://localhost:8036/api/v1/' + 'paymentDeclaration/';
  public save() : Observable<PaymentDeclaration>{
    return this.http.post<PaymentDeclaration>(this.url, this.paymentDeclaration);
  }

  public deleteByCode() : Observable<number>{
    console.log('url==>' + this.url + 'code/' + this.paymentDeclaration.code);
    return this.http.delete<number>(this.url +'code/' + this.paymentDeclaration.code);
  }


  public findAll() : Observable<Array<PaymentDeclaration>>{
    return this.http.get<Array<PaymentDeclaration>>(this.url);
  }

  constructor(private http:HttpClient) { }


  get paymentDeclaration(): PaymentDeclaration {
    if(this._paymentDeclaration == null){
      this._paymentDeclaration= new PaymentDeclaration();
    }
    return this._paymentDeclaration;
  }

  set paymentDeclaration(value: PaymentDeclaration) {
    this._paymentDeclaration = value;
  }

  get paymentDeclarations(): Array<PaymentDeclaration> {
    if(this._paymentDeclarations == null){
      this._paymentDeclarations= new Array<PaymentDeclaration>();
    }

    return this._paymentDeclarations;
  }

  set paymentDeclarations(value: Array<PaymentDeclaration>) {
    this._paymentDeclarations = value;
  }
}
