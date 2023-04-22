import { Injectable } from '@angular/core';

import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CategorieDeclaration} from "../model/categorieDeclaration.model";



@Injectable({
  providedIn: 'root'
})
export class CategorieDeclarationService {
  private _categoriedeclaration !: CategorieDeclaration;
  private _categoriedeclarations!: Array<CategorieDeclaration>;
  private _url = 'http://localhost:8036/api/v1/' + 'categorieDeclaration/';
  public save() : Observable<CategorieDeclaration>{
    return this._http.post<CategorieDeclaration>(this._url, this.categoriedeclaration);
  }

  public deleteByCode() : Observable<number>{
    console.log('url==>' + this._url + 'code/' + this.categoriedeclaration.code);
    return this._http.delete<number>(this._url +'code/' + this.categoriedeclaration.code);
  }

  public findAll() : Observable<Array<CategorieDeclaration>>{
    return this._http.get<Array<CategorieDeclaration>>(this._url);
  }
  constructor(private _http:HttpClient) { }


  get categoriedeclaration(): CategorieDeclaration {
    if(this._categoriedeclaration == null){
      this._categoriedeclaration= new CategorieDeclaration();
    }

    return this._categoriedeclaration;
  }

  set categoriedeclaration(value: CategorieDeclaration) {
    this._categoriedeclaration = value;
  }

  get categoriedeclarations(): Array<CategorieDeclaration> {
    if(this._categoriedeclarations == null){
      this._categoriedeclarations= new Array<CategorieDeclaration>();
    }
    return this._categoriedeclarations;
  }

  set categoriedeclarations(value: Array<CategorieDeclaration>) {
    this._categoriedeclarations = value;
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
