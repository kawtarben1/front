import {Component, OnInit} from '@angular/core';
import {DeclarationIRService} from "../../../controler/service/declarationIR.service";
import {DeclarationIR} from "../../../controler/model/declarationIR.model";
import {DeclarationIRdetailles} from "../../../controler/model/declarationIRdetailles.model";

@Component({
  selector: 'app-declarationIR-create',
  templateUrl: './declarationIR-create.component.html',
  styleUrls: ['./declarationIR-create.component.css']
})
export class DeclarationIRCreateComponent implements OnInit{
  constructor(private declarationIRService: DeclarationIRService) {
  }
  ngOnInit(): void {
  }
  public save(){
    this.declarationIRService.save();
  }

  public validateSave(){
   return this.declarationIRService.validateSave();
  }
  public addDeclarationIRdetailles(){
    this.declarationIRService.addDeclarationIRdetailles();
  }

  get declarationIR(): DeclarationIR {

    return this.declarationIRService.declarationIR;
  }
  get declarationIRdetailles(): DeclarationIRdetailles {

    return this.declarationIRService.declarationIRdetailles;
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
