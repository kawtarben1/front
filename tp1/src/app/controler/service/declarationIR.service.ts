import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DeclarationIR} from "../model/declarationIR.model";
import {DeclarationIRdetailles} from "../model/declarationIRdetailles.model";
import {DemandeDeclaration} from "../model/demandeDeclaration.model";
import { TauxIR } from '../model/tauxIR.model';
import { Employe } from '../model/employe.model';

@Injectable({
  providedIn: 'root'
})
export class DeclarationIRService {
  private _declarationIR !: DeclarationIR;
  private _declarationIRdetailles !: DeclarationIRdetailles;
  private _declarationIRs!: Array<DeclarationIR>;
  private _url = 'http://localhost:8036/api/v1/' + 'declarationIR/';

  public addDeclarationIRdetailles(){
    this.declarationIR.totalTaxe+= this.declarationIRdetailles.montantIR;
    this.declarationIR.salaireTotalNet+= this.declarationIRdetailles.salaireEmployeNet;
    this.declarationIR.salaireTotalBrute+= this.declarationIRdetailles.salaireEmployeBrute;
    this.declarationIR.declarationIRdetailles.push(this.declarationIRdetailles);
  }
  public save() : Observable<DeclarationIR>{
    return this._http.post<DeclarationIR>(this._url, this.declarationIR);
  }

  public validateSave(): boolean {
    return this.declarationIR.code != null && this.declarationIR.declarationIRdetailles.length > 0;
  }

  public deleteByCode() : Observable<number>{
    console.log('url==>' + this._url + 'code/' + this.declarationIR.code);
    return this._http.delete<number>(this._url +'code/' + this.declarationIR.code);
  }


  public findAll() : Observable<Array<DeclarationIR>>{
    return this._http.get<Array<DeclarationIR>>(this._url);
  }

  constructor(private _http:HttpClient) { }


  get declarationIR(): DeclarationIR {
    if(this._declarationIR == null){
      this._declarationIR= new DeclarationIR();
    }
    return this._declarationIR;
  }

  set declarationIR(value: DeclarationIR) {
    this._declarationIR = value;
  }

  get declarationIRs(): Array<DeclarationIR> {
    if(this._declarationIRs == null){
      this._declarationIRs= new Array<DeclarationIR>();
    }

    return this._declarationIRs;
  }

  set declarationIRs(value: Array<DeclarationIR>) {
    this._declarationIRs = value;
  }


  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }

  get declarationIRdetailles(): DeclarationIRdetailles {
    if (this._declarationIRdetailles == null){
      this._declarationIRdetailles = new DeclarationIRdetailles();
    }
    return this._declarationIRdetailles;
  }

  set declarationIRdetailles(value: DeclarationIRdetailles) {
    this._declarationIRdetailles = value;
  }


  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }


}
