import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PaymentDeclaration} from "../model/paymentDeclaration.model";
import {TypePayment} from "../model/typePayment.model";
import {DemandeDeclaration} from "../model/demandeDeclaration.model";
import {CategorieComptable} from "../model/categorieComptable.model";

@Injectable({
  providedIn: 'root'
})
export class PaymentDeclarationService {
  private _paymentDeclaration !: PaymentDeclaration;
  private _paymentDeclarations!: Array<PaymentDeclaration>;
  private _url = 'http://localhost:8036/api/v1/' + 'paymentDeclaration/';
  public save() : Observable<PaymentDeclaration>{
    return this._http.post<PaymentDeclaration>(this._url, this.paymentDeclaration);
  }

  public deleteByCode() : Observable<number>{
    console.log('url==>' + this._url + 'code/' + this.paymentDeclaration.code);
    return this._http.delete<number>(this._url +'code/' + this.paymentDeclaration.code);
  }


  public findAll() : Observable<Array<PaymentDeclaration>>{
    return this._http.get<Array<PaymentDeclaration>>(this._url);
  }

  constructor(private _http:HttpClient) { }


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
