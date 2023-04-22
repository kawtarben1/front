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
  private _url = 'http://localhost:8036/api/v1/' + 'categorieSociete/';
  public save() : Observable<CategorieSociete>{
    return this._http.post<CategorieSociete>(this._url, this.categoriesociete);
  }


  public deleteByCode() : Observable<number>{
    console.log('url==>' + this._url + 'code/' + this.categoriesociete.code);
    return this._http.delete<number>(this._url +'code/' + this.categoriesociete.code);
  }

  public findAll() : Observable<Array<CategorieSociete>>{
    return this._http.get<Array<CategorieSociete>>(this._url);
  }
  constructor(private _http:HttpClient) { }

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
