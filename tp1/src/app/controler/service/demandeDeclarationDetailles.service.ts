import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DemandeDeclarationDetailles} from "../model/demandeDeclarationDetailles.model";

@Injectable({
  providedIn: 'root'
})
export class DemandeDeclarationDetaillesService {
  private _demandeDeclarationDetailles !: DemandeDeclarationDetailles;
  private _demandeDeclarationDetailless!: Array<DemandeDeclarationDetailles>;
  private url = 'http://localhost:8036/api/v1/' + 'demandeDeclarationDetailles/';
  public save() : Observable<DemandeDeclarationDetailles>{
    return this.http.post<DemandeDeclarationDetailles>(this.url, this.demandeDeclarationDetailles);
  }

  public deleteByRef() : Observable<number>{
    console.log('url==>' + this.url + 'ref/' + this.demandeDeclarationDetailles.ref);
    return this.http.delete<number>(this.url +'ref/' + this.demandeDeclarationDetailles.ref);
  }


  public findAll() : Observable<Array<DemandeDeclarationDetailles>>{
    return this.http.get<Array<DemandeDeclarationDetailles>>(this.url);
  }

  constructor(private http:HttpClient) { }


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
}
