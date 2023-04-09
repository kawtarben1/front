import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Societe} from "../model/societe.model";

@Injectable({
  providedIn: 'root'
})
export class SocieteService {
  private _societe!: Societe;
  private _societes!: Array<Societe>;
  private url = 'http://localhost:8036/api/v1/' + 'societe/';
  public save() : Observable<Societe>{
    return this.http.post<Societe>(this.url, this.societe);
  }

  public deleteByIce() : Observable<number>{
    console.log('url==>' + this.url + 'Ice/' + this.societe.ice);
    return this.http.delete<number>(this.url +'Ice/' + this.societe.ice);
  }

  public findAll() : Observable<Array<Societe>>{
    return this.http.get<Array<Societe>>(this.url);
  }
  constructor(private http:HttpClient) { }


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
}
