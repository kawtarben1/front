import { Injectable } from '@angular/core';

import {Observable} from "rxjs";
import {CategorieSociete} from "../model/categorieSociete.model";
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class CategorieSocieteService {
  private _categoriesociete! : CategorieSociete;
  private _categoriesocietes!: Array<CategorieSociete>;
  private url = 'http://localhost:8036/api/v1/' + 'categorieSociete/';
  public save() : Observable<CategorieSociete>{
    return this.http.post<CategorieSociete>(this.url, this.categoriesociete);
  }


  public deleteByCode() : Observable<number>{
    console.log('url==>' + this.url + 'code/' + this.categoriesociete.code);
    return this.http.delete<number>(this.url +'code/' + this.categoriesociete.code);
  }

  public findAll() : Observable<Array<CategorieSociete>>{
    return this.http.get<Array<CategorieSociete>>(this.url);
  }
  constructor(private http:HttpClient) { }

  get categoriesocietes(): Array<CategorieSociete> {
    if(this._categoriesocietes == null){
      this._categoriesocietes= new Array<CategorieSociete>();
    }
    return this._categoriesocietes;
  }

  set categoriesocietes(value: Array<CategorieSociete>) {
    this._categoriesocietes = value;
  }

  get categoriesociete(): CategorieSociete {
    if(this._categoriesociete == null){
      this._categoriesociete= new CategorieSociete();
    }
    return this._categoriesociete;
  }

  set categoriesociete(value: CategorieSociete) {
    this._categoriesociete = value;
  }
}
