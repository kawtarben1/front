import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DemandeDeclaration} from "../model/demandeDeclaration.model";

@Injectable({
  providedIn: 'root'
})
export class DemandeDeclarationService {
  private _demandeDeclaration !: DemandeDeclaration;
  private _demandeDeclarations!: Array<DemandeDeclaration>;
  private url = 'http://localhost:8036/api/v1/' + 'demandeDeclaration/';
  public save(){
    this.demandeDeclarations.push(this.demandeDeclaration);
  }

  public deleteByRef() : Observable<number>{
    console.log('url==>' + this.url + 'ref/' + this.demandeDeclaration.ref);
    return this.http.delete<number>(this.url +'ref/' + this.demandeDeclaration.ref);
  }


  public findAll() : Observable<Array<DemandeDeclaration>>{
    return this.http.get<Array<DemandeDeclaration>>(this.url);
  }

  constructor(private http:HttpClient) { }


  get demandeDeclaration(): DemandeDeclaration {
    if(this._demandeDeclaration == null){
      this._demandeDeclaration= new DemandeDeclaration();
    }
    return this._demandeDeclaration;
  }

  set demandeDeclaration(value: DemandeDeclaration) {
    this._demandeDeclaration = value;
  }

  get demandeDeclarations(): Array<DemandeDeclaration> {
    if(this._demandeDeclarations == null){
      this._demandeDeclarations= new Array<DemandeDeclaration>();
    }

    return this._demandeDeclarations;
  }

  set demandeDeclarations(value: Array<DemandeDeclaration>) {
    this._demandeDeclarations = value;
  }
}
