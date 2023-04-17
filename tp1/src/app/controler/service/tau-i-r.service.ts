import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TauxIR} from "../model/tauxIR.model";

@Injectable({
  providedIn: 'root'
})
export class TauIRService {
  private _tauxIR!: TauxIR;
  private _tauxIRs!: Array<TauxIR>;
  private url = 'http://localhost:8036/api/v1/' + 'tauxIR/';
  public save() : Observable<TauxIR>{
    return this.http.post<TauxIR>(this.url, this.tauxIR);
  }

  public deleteByLibelle() : Observable<number>{
    console.log('url==>' + this.url + 'libelle/' + this.tauxIR.libelle);
    return this.http.delete<number>(this.url +'libelle/' + this.tauxIR.libelle);
  }

  public findAll() : Observable<Array<TauxIR>>{
    return this.http.get<Array<TauxIR>>(this.url);
  }
  constructor(private http:HttpClient) { }


  get tauxIR(): TauxIR {
    if(this._tauxIR == null){
      this._tauxIR= new TauxIR();
    }

    return this._tauxIR;
  }

  set tauxIR(value: TauxIR) {
    this._tauxIR = value;
  }

  get tauxIRs(): Array<TauxIR> {
    if(this._tauxIRs == null){
      this._tauxIRs= new Array<TauxIR>();
    }
    return this._tauxIRs;
  }

  set tauxIRs(value: Array<TauxIR>) {
    this._tauxIRs = value;
  }
}
