import { Injectable } from '@angular/core';
import {EtatDeclaration} from "../model/etatDeclaration.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EtatDeclarationService {
  private _etatDeclaration !: EtatDeclaration;
  private _etatDeclarations!: Array<EtatDeclaration>;
  private url = 'http://localhost:8036/api/v1/' + 'etatdeclaration/';
  public save() : Observable<EtatDeclaration>{
    return this.http.post<EtatDeclaration>(this.url, this.etatdeclaration);
  }

  public deleteByCode() : Observable<number>{
    console.log('url==>' + this.url + 'code/' + this.etatdeclaration.code);
    return this.http.delete<number>(this.url +'code/' + this.etatdeclaration.code);
  }

  public findAll() : Observable<Array<EtatDeclaration>>{
    return this.http.get<Array<EtatDeclaration>>(this.url);
  }
  constructor(private http:HttpClient) { }


  get etatdeclaration(): EtatDeclaration {
    if(this._etatDeclaration == null){
      this._etatDeclaration= new EtatDeclaration();
    }

    return this._etatDeclaration;
  }

  set etatdeclaration(value: EtatDeclaration) {
    this._etatDeclaration = value;
  }

  get etatdeclarations(): Array<EtatDeclaration> {
    if(this._etatDeclarations == null){
      this._etatDeclarations= new Array<EtatDeclaration>();
    }
    return this._etatDeclarations;
  }

  set etatdeclarations(value: Array<EtatDeclaration>) {
    this._etatDeclarations = value;
  }


}
