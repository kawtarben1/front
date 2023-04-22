import { Injectable } from '@angular/core';
import {EtatDeclaration} from "../model/etatDeclaration.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EtatDeclarationService {
  private _etatDeclaration !: EtatDeclaration;
  private _etatDeclarations!: Array<EtatDeclaration>;
  private _url = 'http://localhost:8036/api/v1/' + 'etatdeclaration/';
  public save() : Observable<EtatDeclaration>{
    return this._http.post<EtatDeclaration>(this._url, this.etatdeclaration);
  }

  public deleteByCode() : Observable<number>{
    console.log('url==>' + this._url + 'code/' + this.etatdeclaration.code);
    return this._http.delete<number>(this._url +'code/' + this.etatdeclaration.code);
  }

  public findAll() : Observable<Array<EtatDeclaration>>{
    return this._http.get<Array<EtatDeclaration>>(this._url);
  }
  constructor(private _http:HttpClient) { }


  get etatdeclaration(): EtatDeclaration {
    if(this._etatDeclaration == null){
      this._etatDeclaration= new EtatDeclaration();
    }

    return this._etatDeclaration;
  }

  set etatdeclaration(value: EtatDeclaration) {
    this._etatDeclaration = value;
  }

  get etatdeclarations(): Array<EtatDeclaration> {
    if(this._etatDeclarations == null){
      this._etatDeclarations= new Array<EtatDeclaration>();
    }
    return this._etatDeclarations;
  }

  set etatdeclarations(value: Array<EtatDeclaration>) {
    this._etatDeclarations = value;
  }


  get etatDeclaration(): EtatDeclaration {
    return this._etatDeclaration;
  }

  set etatDeclaration(value: EtatDeclaration) {
    this._etatDeclaration = value;
  }

  get etatDeclarations(): Array<EtatDeclaration> {
    return this._etatDeclarations;
  }

  set etatDeclarations(value: Array<EtatDeclaration>) {
    this._etatDeclarations = value;
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
