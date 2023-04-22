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
  constructor(private _declarationIRService: DeclarationIRService) {
  }
  ngOnInit(): void {
  }
  public save(): void {
    this._declarationIRService.save().subscribe(data => {
      if (data != null) {

        this.declarationIRs.push({...this.declarationIR});

        console.log("------->"+ this.declarationIRs);
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CIN EXIST');
      }
    });
  }

  public validateSave(){
   return this._declarationIRService.validateSave();
  }
  public addDeclarationIRdetailles(){
    this._declarationIRService.addDeclarationIRdetailles();
  }

  get declarationIR(): DeclarationIR {

    return this._declarationIRService.declarationIR;
  }
  get declarationIRdetailles(): DeclarationIRdetailles {

    return this._declarationIRService.declarationIRdetailles;
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
