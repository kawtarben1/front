import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DeclarationIRdetailles} from "../model/declarationIRdetailles.model";

@Injectable({
  providedIn: 'root'
})
export class DeclarationIRdetaillesService {
  private _declarationIRdetailles !: DeclarationIRdetailles;
  private _declarationIRdetailless!: Array<DeclarationIRdetailles>;
  private url = 'http://localhost:8036/api/v1/' + 'declarationIRdetailles/';
  public save() : Observable<DeclarationIRdetailles>{
    return this.http.post<DeclarationIRdetailles>(this.url, this.declarationIRdetailles);
  }

  public deleteByCode() : Observable<number>{
    console.log('url==>' + this.url + 'code/' + this.declarationIRdetailles.code);
    return this.http.delete<number>(this.url +'code/' + this.declarationIRdetailles.code);
  }


  public findAll() : Observable<Array<DeclarationIRdetailles>>{
    return this.http.get<Array<DeclarationIRdetailles>>(this.url);
  }

  constructor(private http:HttpClient) { }


  get declarationIRdetailles(): DeclarationIRdetailles {
    if(this._declarationIRdetailles == null){
      this._declarationIRdetailles= new DeclarationIRdetailles();
    }
    return this._declarationIRdetailles;
  }

  set declarationIRdetailles(value: DeclarationIRdetailles) {
    this._declarationIRdetailles = value;
  }

  get declarationIRdetailless(): Array<DeclarationIRdetailles> {
    if(this._declarationIRdetailless == null){
      this._declarationIRdetailless= new Array<DeclarationIRdetailles>();
    }

    return this._declarationIRdetailless;
  }

  set declarationIRdetailless(value: Array<DeclarationIRdetailles>) {
    this._declarationIRdetailless = value;
  }
}
