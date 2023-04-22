import {Component, OnInit} from '@angular/core';
import {DeclarationIRService} from "../../../controler/service/declarationIR.service";
import {DeclarationIR} from "../../../controler/model/declarationIR.model";
@Component({
  selector: 'app-declarationIR-list',
  templateUrl: './declarationIR-list.component.html',
  styleUrls: ['./declarationIR-list.component.css']
})
export class DeclarationIRListComponent implements OnInit{
  constructor(private _declarationIRService: DeclarationIRService) {
  }
  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): void{
    this._declarationIRService.findAll().subscribe(data =>  this.declarationIRs = data );
  }
  public deleteByCode(declarationIR: DeclarationIR, index: number): void{
    console.log('le code ' + declarationIR.code);
    this.declarationIR = declarationIR;
    this._declarationIRService.deleteByCode().subscribe(data =>  {
      if(data>0){
        this.declarationIRs.splice(index, 1);
      }else{
        alert('DELETE ERROR');
      }
    } );
  }
  get declarationIR():DeclarationIR{

    return this._declarationIRService.declarationIR;
  }

  set declarationIR(value: DeclarationIR) {
    this._declarationIRService.declarationIR = value;
  }

  get declarationIRs(): Array<DeclarationIR> {

    return this._declarationIRService.declarationIRs;
  }

  set declarationIRs(value: Array<DeclarationIR>) {
    this._declarationIRService.declarationIRs = value;
  }

  get declarationIRService(): DeclarationIRService {
    return this._declarationIRService;
  }

  set declarationIRService(value: DeclarationIRService) {
    this._declarationIRService = value;
  }

}
