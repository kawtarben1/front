import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Societe} from "../model/societe.model";
import {CategorieSociete} from "../model/categorieSociete.model";

@Injectable({
  providedIn: 'root'
})
export class SocieteService {
  private _societe!: Societe;
  private _societes!: Array<Societe>;
  private _url = 'http://localhost:8036/api/v1/' + 'societe/';
  public save() : Observable<Societe>{
    return this._http.post<Societe>(this._url, this.societe);
  }

  public deleteByIce() : Observable<number>{
    console.log('url==>' + this._url + 'Ice/' + this.societe.ice);
    return this._http.delete<number>(this._url +'Ice/' + this.societe.ice);
  }

  public findAll() : Observable<Array<Societe>>{
    return this._http.get<Array<Societe>>(this._url);
  }
  constructor(private _http:HttpClient) { }


  get societe(): Societe {
    if(this._societe == null){
      this._societe= new Societe();
    }

    return this._societe;
  }

  set societe(value: Societe) {
    this._societe = value;
  }

  get societes(): Array<Societe> {
    if(this._societes == null){
      this._societes= new Array<Societe>();
    }
    return this._societes;
  }

  set societes(value: Array<Societe>) {
    this._societes = value;
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
