import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Employe} from "../model/employe.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private _employe !: Employe;
  private _employes!: Array<Employe>;
  private url = 'http://localhost:8036/api/v1/' + 'employe/';
  public save() : Observable<Employe>{
    return this.http.post<Employe>(this.url, this.employe);
  }

  public deleteByCin() : Observable<number>{
    console.log('url==>' + this.url + 'cin/' + this.employe.cin);
    return this.http.delete<number>(this.url +'cin/' + this.employe.cin);
  }

  public findAll() : Observable<Array<Employe>>{
    return this.http.get<Array<Employe>>(this.url);
  }
  constructor(private http:HttpClient) { }


  get employe(): Employe {
    if(this._employe == null){
      this._employe= new Employe();
    }

    return this._employe;
  }

  set employe(value: Employe) {
    this._employe = value;
  }

  get employes(): Array<Employe> {
    if(this._employes == null){
      this._employes= new Array<Employe>();
    }
    return this._employes;
  }

  set employes(value: Array<Employe>) {
    this._employes = value;
  }
}
