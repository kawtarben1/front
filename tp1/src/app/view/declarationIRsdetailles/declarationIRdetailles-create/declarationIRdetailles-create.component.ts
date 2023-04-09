import {Component, OnInit} from '@angular/core';
import {DeclarationIRdetaillesService} from "../../../controler/service/declarationIRdetailles.service";
import {DeclarationIRdetailles} from "../../../controler/model/declarationIRdetailles.model";

@Component({
  selector: 'app-declarationIRdetailles-create',
  templateUrl: './declarationIRdetailles-create.component.html',
  styleUrls: ['./declarationIRdetailles-create.component.css']
})
export class DeclarationIRdetaillesCreateComponent implements OnInit{
  constructor(private declarationIRdetaillesService: DeclarationIRdetaillesService) {
  }
  ngOnInit(): void {
  }
  public save(): void {
    this.declarationIRdetaillesService.save().subscribe(data => {
      if (data != null) {
        this.declarationIRdetailless.push({...this.declarationIRdetailles});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CIN EXIST');
      }
    });
  }

  get declarationIRdetailles(): DeclarationIRdetailles {

    return this.declarationIRdetaillesService.declarationIRdetailles;
  }

  set declarationIRdetailles(value: DeclarationIRdetailles) {
    this.declarationIRdetaillesService.declarationIRdetailles = value;
  }

  get declarationIRdetailless(): Array<DeclarationIRdetailles> {

    return this.declarationIRdetaillesService.declarationIRdetailless;
  }

  set declarationIRdetailless(value: Array<DeclarationIRdetailles>) {
    this.declarationIRdetaillesService.declarationIRdetailless = value;
  }

}
