import {Component, OnInit} from '@angular/core';
import {DeclarationIRService} from "../../../controler/service/declarationIR.service";
import {DeclarationIR} from "../../../controler/model/declarationIR.model";
@Component({
  selector: 'app-declarationIR-list',
  templateUrl: './declarationIR-list.component.html',
  styleUrls: ['./declarationIR-list.component.css']
})
export class DeclarationIRListComponent implements OnInit{
  constructor(private declarationIRService: DeclarationIRService) {
  }
  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): void{
    this.declarationIRService.findAll().subscribe(data =>  this.declarationIRs = data );
  }
  public delete( index: number){
        this.declarationIRs.splice(index, 1);
  }
  get declarationIR():DeclarationIR{

    return this.declarationIRService.declarationIR;
  }

  set declarationIR(value: DeclarationIR) {
    this.declarationIRService.declarationIR = value;
  }

  get declarationIRs(): Array<DeclarationIR> {

    return this.declarationIRService.declarationIRs;
  }

  set declarationIRs(value: Array<DeclarationIR>) {
    this.declarationIRService.declarationIRs = value;
  }

}
