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
  private _url = 'http://localhost:8036/api/v1/' + 'typeFacture/';
  public save() : Observable<TypeFacture>{
    return this._http.post<TypeFacture>(this._url, this.typeFacture);
  }

  public deleteByCode(code: string) : Observable<number>{
    console.log('url==>' + this._url + 'code/' + this.typeFacture.code);
    return this._http.delete<number>(this._url +'code/' + this.typeFacture.code);
  }


  public findAll() : Observable<Array<TypeFacture>>{
    return this._http.get<Array<TypeFacture>>(this._url);
  }

  constructor(private _http:HttpClient) { }


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
