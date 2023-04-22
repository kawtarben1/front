import {Component, OnInit} from '@angular/core';
import {DeclarationIRdetaillesService} from "../../../controler/service/declarationIRdetailles.service";
import {DeclarationIRdetailles} from "../../../controler/model/declarationIRdetailles.model";

@Component({
  selector: 'app-declarationIRdetailles-create',
  templateUrl: './declarationIRdetailles-create.component.html',
  styleUrls: ['./declarationIRdetailles-create.component.css']
})
export class DeclarationIRdetaillesCreateComponent implements OnInit{
  constructor(private _declarationIRdetaillesService: DeclarationIRdetaillesService) {
  }
  ngOnInit(): void {
  }
  public save(): void {
    this._declarationIRdetaillesService.save().subscribe(data => {
      if (data != null) {
        this.declarationIRdetailless.push({...this.declarationIRdetailles});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CIN EXIST');
      }
    });
  }

  get declarationIRdetailles(): DeclarationIRdetailles {

    return this._declarationIRdetaillesService.declarationIRdetailles;
  }

  set declarationIRdetailles(value: DeclarationIRdetailles) {
    this._declarationIRdetaillesService.declarationIRdetailles = value;
  }

  get declarationIRdetailless(): Array<DeclarationIRdetailles> {

    return this._declarationIRdetaillesService.declarationIRdetailless;
  }

  set declarationIRdetailless(value: Array<DeclarationIRdetailles>) {
    this._declarationIRdetaillesService.declarationIRdetailless = value;
  }

  get declarationIRdetaillesService(): DeclarationIRdetaillesService {
    return this._declarationIRdetaillesService;
  }

  set declarationIRdetaillesService(value: DeclarationIRdetaillesService) {
    this._declarationIRdetaillesService = value;
  }
}
