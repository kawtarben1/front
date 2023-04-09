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
  private url = 'http://localhost:8036/api/v1/' + 'categorieDeclaration/';
  public save() : Observable<CategorieDeclaration>{
    return this.http.post<CategorieDeclaration>(this.url, this.categoriedeclaration);
  }

  public deleteByCode() : Observable<number>{
    console.log('url==>' + this.url + 'code/' + this.categoriedeclaration.code);
    return this.http.delete<number>(this.url +'code/' + this.categoriedeclaration.code);
  }

  public findAll() : Observable<Array<CategorieDeclaration>>{
    return this.http.get<Array<CategorieDeclaration>>(this.url);
  }
  constructor(private http:HttpClient) { }


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
}
