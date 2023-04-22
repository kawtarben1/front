import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DemandeDeclaration} from "../model/demandeDeclaration.model";
import {Societe} from "../model/societe.model";
import {Comptable} from "../model/comptable.model";
import {CategorieDeclaration} from "../model/categorieDeclaration.model";
import {CategorieComptable} from "../model/categorieComptable.model";

@Injectable({
  providedIn: 'root'
})
export class DemandeDeclarationService {
  private _demandeDeclaration !: DemandeDeclaration;
  private _demandeDeclarations!: Array<DemandeDeclaration>;
  private _url = 'http://localhost:8036/api/v1/' + 'demandeDeclaration/';

  public save(): Observable<DemandeDeclaration> {
    return this._http.post<DemandeDeclaration>(this._url, this.demandeDeclaration);
  }

  public deleteByRef(): Observable<number> {
    console.log('url==>' + this._url + 'ref/' + this.demandeDeclaration.ref);
    return this._http.delete<number>(this._url + 'ref/' + this.demandeDeclaration.ref);
  }


  public findAll(): Observable<Array<DemandeDeclaration>> {
    return this._http.get<Array<DemandeDeclaration>>(this._url);
  }

  constructor(private _http: HttpClient) {
  }


  get demandeDeclaration(): DemandeDeclaration {
    if (this._demandeDeclaration == null) {
      this._demandeDeclaration = new DemandeDeclaration();
    }
    return this._demandeDeclaration;
  }

  set demandeDeclaration(value: DemandeDeclaration) {
    this._demandeDeclaration = value;
  }

  get demandeDeclarations(): Array<DemandeDeclaration> {
    if (this._demandeDeclarations == null) {
      this._demandeDeclarations = new Array<DemandeDeclaration>();
    }

    return this._demandeDeclarations;
  }

  set demandeDeclarations(value: Array<DemandeDeclaration>) {
    this._demandeDeclarations = value;
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
