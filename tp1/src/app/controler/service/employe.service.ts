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
  private _url = 'http://localhost:8036/api/v1/' + 'employe/';
  public save() : Observable<Employe>{
    return this._http.post<Employe>(this._url, this.employe);
  }

  public deleteByCin() : Observable<number>{
    console.log('url==>' + this._url + 'cin/' + this.employe.cin);
    return this._http.delete<number>(this._url +'cin/' + this.employe.cin);
  }

  public findAll() : Observable<Array<Employe>>{
    return this._http.get<Array<Employe>>(this._url);
  }
  constructor(private _http:HttpClient) { }


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
