import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DeclarationIR} from "../model/declarationIR.model";

@Injectable({
  providedIn: 'root'
})
export class DeclarationIRService {
  private _declarationIR !: DeclarationIR;
  private _declarationIRs!: Array<DeclarationIR>;
  private url = 'http://localhost:8036/api/v1/' + 'declarationIR/';
  public save() : Observable<DeclarationIR>{
    return this.http.post<DeclarationIR>(this.url, this.declarationIR);
  }

  public deleteByCode() : Observable<number>{
    console.log('url==>' + this.url + 'code/' + this.declarationIR.code);
    return this.http.delete<number>(this.url +'code/' + this.declarationIR.code);
  }


  public findAll() : Observable<Array<DeclarationIR>>{
    return this.http.get<Array<DeclarationIR>>(this.url);
  }

  constructor(private http:HttpClient) { }


  get declarationIR(): DeclarationIR {
    if(this._declarationIR == null){
      this._declarationIR= new DeclarationIR();
    }
    return this._declarationIR;
  }

  set declarationIR(value: DeclarationIR) {
    this._declarationIR = value;
  }

  get declarationIRs(): Array<DeclarationIR> {
    if(this._declarationIRs == null){
      this._declarationIRs= new Array<DeclarationIR>();
    }

    return this._declarationIRs;
  }

  set declarationIRs(value: Array<DeclarationIR>) {
    this._declarationIRs = value;
  }
}
