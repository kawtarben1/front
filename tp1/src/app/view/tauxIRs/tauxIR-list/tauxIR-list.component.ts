import {Component, OnInit} from '@angular/core';
import {TauxIRService} from "../../../controler/service/tauxIR.service";
import {TauxIR} from "../../../controler/model/tauxIR.model";

@Component({
  selector: 'app-tauxIR-list',
  templateUrl: './tauxIR-list.component.html',
  styleUrls: ['./tauxIR-list.component.css']
})
export class TauxIRListComponent implements OnInit{


  constructor(private tauxIRService: TauxIRService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.tauxIRService.findAll().subscribe(data =>  this.tauxIRs = data );
  }

  public deleteByLibelle(tauxIR: TauxIR, index: number): void{
    console.log('le libelle ' + tauxIR.libelle);
    this.tauxIR = tauxIR;
    this.tauxIRService.deleteByLibelle().subscribe(data =>  {
      if(data>0){
        this.tauxIRs.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
  }

  get tauxIR(): TauxIR {

    return this.tauxIRService.tauxIR;
  }

  set tauxIR(value: TauxIR) {
    this.tauxIRService.tauxIR = value;
  }

  get tauxIRs(): Array<TauxIR> {

    return this.tauxIRService.tauxIRs;
  }

  set tauxIRs(value: Array<TauxIR>) {
    this.tauxIRService.tauxIRs = value;
  }

}
