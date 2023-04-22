import {Component, OnInit} from '@angular/core';

import {DeclarationFactureService} from "../../../controler/service/declarationFacture.service";
import {DeclarationFacture} from "../../../controler/model/declarationFacture.model";


@Component({
  selector: 'app-declarationfacture-create',
  templateUrl: './declarationfacture-create.component.html',
  styleUrls: ['./declarationfacture-create.component.css']
})
export class DeclarationFactureCreateComponent implements OnInit{

  constructor(private _DeclarationFactureService: DeclarationFactureService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this._DeclarationFactureService.save().subscribe(data => {
      if (data != null) {
        this.declarationfactures.push({...this.declarationfacture});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: REF EXIST');
      }
    });
  }

  get declarationfacture():DeclarationFacture{

    return this._DeclarationFactureService.declarationFacture;
  }

  set declarationfacture(value: DeclarationFacture) {
    this._DeclarationFactureService.declarationFacture = value;
  }

  get declarationfactures(): Array<DeclarationFacture> {

    return this._DeclarationFactureService.declarationFactures;
  }

  set declarationfactures(value: Array<DeclarationFacture>) {
    this._DeclarationFactureService.declarationFactures = value;
  }

  get DeclarationFactureService(): DeclarationFactureService {
    return this._DeclarationFactureService;
  }

  set DeclarationFactureService(value: DeclarationFactureService) {
    this._DeclarationFactureService = value;
  }
}
