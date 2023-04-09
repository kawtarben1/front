import {Component, OnInit} from '@angular/core';
import {DeclarationIRService} from "../../../controler/service/declarationIR.service";
import {DeclarationIR} from "../../../controler/model/declarationIR.model";

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
  public save(): void {
    this.declarationIRService.save().subscribe(data => {
      if (data != null) {
        this.declarationIRs.push({...this.declarationIR});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CIN EXIST');
      }
    });
  }

  get declarationIR(): DeclarationIR {

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
