import { Injectable } from '@angular/core';

import {Observable} from "rxjs";
import {DeclarationFacture} from "../model/declarationFacture.model";
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class DeclarationFactureService {

  private _declarationFacture !: DeclarationFacture;
  private _declarationFactures!: Array<DeclarationFacture>;
  private url = 'http://localhost:8036/api/v1/' + 'declarationFacture/';
  public save() : Observable<DeclarationFacture>{
    return this.http.post<DeclarationFacture>(this.url, this.declarationFacture);
  }

  public deleteByTypeFactureref() : Observable<number>{
    console.log('url==>' + this.url + 'code/' + this.declarationFacture.ref);
    return this.http.delete<number>(this.url +'ref/' + this.declarationFacture.ref);
  }


  public findAll() : Observable<Array<DeclarationFacture>>{
    return this.http.get<Array<DeclarationFacture>>(this.url);
  }

  constructor(private http:HttpClient) { }


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
}
