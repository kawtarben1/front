import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DeclarationIRdetailles} from "../model/declarationIRdetailles.model";
import {DeclarationIR} from "../model/declarationIR.model";
import {DemandeDeclaration} from "../model/demandeDeclaration.model";
import { TauxIR } from '../model/tauxIR.model';
import {Employe} from "../model/employe.model";

@Injectable({
  providedIn: 'root'
})
export class DeclarationIRdetaillesService {
  private _declarationIRdetailles !: DeclarationIRdetailles;
  private _declarationIRdetailless!: Array<DeclarationIRdetailles>;
  private _url = 'http://localhost:8036/api/v1/' + 'declarationIRdetailles/';
  public save() : Observable<DeclarationIRdetailles>{
    return this._http.post<DeclarationIRdetailles>(this._url, this.declarationIRdetailles);
  }

  public deleteByCode() : Observable<number>{
    console.log('url==>' + this._url + 'code/' + this.declarationIRdetailles.code);
    return this._http.delete<number>(this._url +'code/' + this.declarationIRdetailles.code);
  }


  public findAll() : Observable<Array<DeclarationIRdetailles>>{
    return this._http.get<Array<DeclarationIRdetailles>>(this._url);
  }

  constructor(private _http:HttpClient) { }


  get declarationIRdetailles(): DeclarationIRdetailles {
    if(this._declarationIRdetailles == null){
      this._declarationIRdetailles= new DeclarationIRdetailles();
    }
    return this._declarationIRdetailles;
  }

  set declarationIRdetailles(value: DeclarationIRdetailles) {
    this._declarationIRdetailles = value;
  }

  get declarationIRdetailless(): Array<DeclarationIRdetailles> {
    if(this._declarationIRdetailless == null){
      this._declarationIRdetailless= new Array<DeclarationIRdetailles>();
    }

    return this._declarationIRdetailless;
  }

  set declarationIRdetailless(value: Array<DeclarationIRdetailles>) {
    this._declarationIRdetailless = value;
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
