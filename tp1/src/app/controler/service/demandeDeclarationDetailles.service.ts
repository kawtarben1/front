import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DemandeDeclarationDetailles} from "../model/demandeDeclarationDetailles.model";
import {DemandeDeclaration} from "../model/demandeDeclaration.model";

@Injectable({
  providedIn: 'root'
})
export class DemandeDeclarationDetaillesService {
  private _demandeDeclarationDetailles !: DemandeDeclarationDetailles;
  private _demandeDeclarationDetailless!: Array<DemandeDeclarationDetailles>;
  private _url = 'http://localhost:8036/api/v1/' + 'demandeDeclarationDetailles/';
  public save() : Observable<DemandeDeclarationDetailles>{
    return this._http.post<DemandeDeclarationDetailles>(this._url, this.demandeDeclarationDetailles);
  }

  public deleteByRef() : Observable<number>{
    console.log('url==>' + this._url + 'ref/' + this.demandeDeclarationDetailles.ref);
    return this._http.delete<number>(this._url +'ref/' + this.demandeDeclarationDetailles.ref);
  }


  public findAll() : Observable<Array<DemandeDeclarationDetailles>>{
    return this._http.get<Array<DemandeDeclarationDetailles>>(this._url);
  }

  constructor(private _http:HttpClient) { }


  get demandeDeclarationDetailles(): DemandeDeclarationDetailles {
    if(this._demandeDeclarationDetailles == null){
      this._demandeDeclarationDetailles= new DemandeDeclarationDetailles();
    }
    return this._demandeDeclarationDetailles;
  }

  set demandeDeclarationDetailles(value: DemandeDeclarationDetailles) {
    this._demandeDeclarationDetailles = value;
  }

  get demandeDeclarationDetailless(): Array<DemandeDeclarationDetailles> {
    if(this._demandeDeclarationDetailless == null){
      this._demandeDeclarationDetailless= new Array<DemandeDeclarationDetailles>();
    }

    return this._demandeDeclarationDetailless;
  }

  set demandeDeclarationDetailless(value: Array<DemandeDeclarationDetailles>) {
    this._demandeDeclarationDetailless = value;
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
