import {Component, OnInit} from '@angular/core';
import {TauIRService} from "../../../controler/service/tau-i-r.service";
import {TauxIR} from "../../../controler/model/tauxIR.model";

@Component({
  selector: 'app-tauxIR-list',
  templateUrl: './tauxIR-list.component.html',
  styleUrls: ['./tauxIR-list.component.css']
})
export class TauxIRListComponent implements OnInit{


  constructor(private _tauxIRService: TauIRService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this._tauxIRService.findAll().subscribe(data =>  this.tauxIRs = data );
  }

  public deleteByLibelle(tauxIR: TauxIR, index: number): void{
    console.log('le libelle ' + tauxIR.libelle);
    this.tauxIR = tauxIR;
    this._tauxIRService.deleteByLibelle().subscribe(data =>  {
      if(data>0){
        this.tauxIRs.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
  }

  get tauxIR(): TauxIR {

    return this._tauxIRService.tauxIR;
  }

  set tauxIR(value: TauxIR) {
    this._tauxIRService.tauxIR = value;
  }

  get tauxIRs(): Array<TauxIR> {

    return this._tauxIRService.tauxIRs;
  }

  set tauxIRs(value: Array<TauxIR>) {
    this._tauxIRService.tauxIRs = value;
  }

  get tauxIRService(): TauIRService {
    return this._tauxIRService;
  }

  set tauxIRService(value: TauIRService) {
    this._tauxIRService = value;
  }
}
