import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TypeFacture} from "../model/typeFacture.model";

@Injectable({
  providedIn: 'root'
})
export class TypeFactureService {
  private _typeFacture !: TypeFacture;
  private _typeFactures!: Array<TypeFacture>;
  private url = 'http://localhost:8036/api/v1/' + 'typeFacture/';
  public save() : Observable<TypeFacture>{
    return this.http.post<TypeFacture>(this.url, this.typeFacture);
  }

  public deleteByCode() : Observable<number>{
    console.log('url==>' + this.url + 'code/' + this.typeFacture.code);
    return this.http.delete<number>(this.url +'code/' + this.typeFacture.code);
  }


  public findAll() : Observable<Array<TypeFacture>>{
    return this.http.get<Array<TypeFacture>>(this.url);
  }

  constructor(private http:HttpClient) { }


  get typeFacture(): TypeFacture {
    if(this._typeFacture == null){
      this._typeFacture= new TypeFacture();
    }
    return this._typeFacture;
  }

  set typeFacture(value: TypeFacture) {
    this._typeFacture = value;
  }

  get typeFactures(): Array<TypeFacture> {
    if(this._typeFactures == null){
      this._typeFactures= new Array<TypeFacture>();
    }

    return this._typeFactures;
  }

  set typeFactures(value: Array<TypeFacture>) {
    this._typeFactures = value;
  }
}
