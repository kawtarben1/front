import { Injectable } from '@angular/core';

import {Observable} from "rxjs";
import {DeclarationFacture} from "../model/declarationFacture.model";
import {HttpClient} from "@angular/common/http";
import {TypeFacture} from "../model/typeFacture.model";
import {DemandeDeclaration} from "../model/demandeDeclaration.model";



@Injectable({
  providedIn: 'root'
})
export class DeclarationFactureService {

  private _declarationFacture !: DeclarationFacture;
  private _declarationFactures!: Array<DeclarationFacture>;
  private _url = 'http://localhost:8036/api/v1/' + 'declarationFacture/';
  public save() : Observable<DeclarationFacture>{
    return this._http.post<DeclarationFacture>(this._url, this.declarationFacture);
  }

  public deleteByTypeFactureref() : Observable<number>{
    console.log('url==>' + this._url + 'code/' + this.declarationFacture.ref);
    return this._http.delete<number>(this._url +'ref/' + this.declarationFacture.ref);
  }


  public findAll() : Observable<Array<DeclarationFacture>>{
    return this._http.get<Array<DeclarationFacture>>(this._url);
  }

  constructor(private _http:HttpClient) { }


  get declarationFacture(): DeclarationFacture {
    if(this._declarationFacture == null){
      this._declarationFacture= new DeclarationFacture();
    }

    return this._declarationFacture;
  }

  set declarationFacture(value: DeclarationFacture) {
    this._declarationFacture = value;
  }

  get declarationFactures(): Array<DeclarationFacture> {

    if(this._declarationFactures == null){
      this._declarationFactures= new Array<DeclarationFacture>();
    }
    return this._declarationFactures;
  }

  set declarationFactures(value: Array<DeclarationFacture>) {
    this._declarationFactures = value;
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
