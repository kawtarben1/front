import { Injectable } from '@angular/core';
import {CategorieComptable} from '../model/categorieComptable.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategorieComptableService {
  private _categoriecomptable! : CategorieComptable;
  private _categoriecomptables!: Array<CategorieComptable>;
  private _url = 'http://localhost:8036/api/v1/' + 'categorieComptable/';
  public save() : Observable<CategorieComptable>{
    return this._http.post<CategorieComptable>(this._url, this.categoriecomptable);
  }
  public deleteByCode(code: string) : Observable<number>{
    console.log('url==>' + this._url + 'code/' + this.categoriecomptable.code);
    return this._http.delete<number>(this._url +'code/' + this.categoriecomptable.code);
  }

  public findAll() : Observable<Array<CategorieComptable>>{
    return this._http.get<Array<CategorieComptable>>(this._url);
  }
  constructor(private _http:HttpClient) { }


  get categoriecomptable(): CategorieComptable {
    if(this._categoriecomptable == null){
      this._categoriecomptable= new CategorieComptable();
    }
    return this._categoriecomptable;
  }

  set categoriecomptable(value: CategorieComptable) {
    this._categoriecomptable = value;
  }

  get categoriecomptables(): Array<CategorieComptable> {
    if(this._categoriecomptables == null){
      this._categoriecomptables= new Array<CategorieComptable>();
    }
    return this._categoriecomptables;
  }

  set categoriecomptables(value: Array<CategorieComptable>) {
    this._categoriecomptables = value;
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
