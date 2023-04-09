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
  private url = 'http://localhost:8036/api/v1/' + 'categorieComptable/';
  public save() : Observable<CategorieComptable>{
    return this.http.post<CategorieComptable>(this.url, this.categoriecomptable);
  }
  public deleteByCode(code: string) : Observable<number>{
    console.log('url==>' + this.url + 'code/' + this.categoriecomptable.code);
    return this.http.delete<number>(this.url +'code/' + this.categoriecomptable.code);
  }

  public findAll() : Observable<Array<CategorieComptable>>{
    return this.http.get<Array<CategorieComptable>>(this.url);
  }
  constructor(private http:HttpClient) { }


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
}
