import {Component, OnInit} from '@angular/core';
import {DemandeDeclarationDetaillesService} from "../../../controler/service/demandeDeclarationDetailles.service";
import {DemandeDeclarationDetailles} from "../../../controler/model/demandeDeclarationDetailles.model";


@Component({
  selector: 'app-demandeDeclarationDetailles-create',
  templateUrl: './demandeDeclarationDetailles-create.component.html',
  styleUrls: ['./demandeDeclarationDetailles-create.component.css']
})
export class DemandeDeclarationDetaillesCreateComponent implements OnInit{
  constructor(private _demandeDeclarationDetaillesService: DemandeDeclarationDetaillesService) {
  }
  ngOnInit(): void {
  }
  public save(): void {
    this._demandeDeclarationDetaillesService.save().subscribe(data => {
      if (data != null) {
        this.demandeDeclarationDetailless.push({...this.demandeDeclarationDetailles});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CIN EXIST');
      }
    });
  }

  get demandeDeclarationDetailles(): DemandeDeclarationDetailles {

    return this._demandeDeclarationDetaillesService.demandeDeclarationDetailles;
  }

  set demandeDeclarationDetailles(value: DemandeDeclarationDetailles) {
    this._demandeDeclarationDetaillesService.demandeDeclarationDetailles = value;
  }

  get demandeDeclarationDetailless(): Array<DemandeDeclarationDetailles> {

    return this._demandeDeclarationDetaillesService.demandeDeclarationDetailless;
  }

  set demandeDeclarationDetailless(value: Array<DemandeDeclarationDetailles>) {
    this._demandeDeclarationDetaillesService.demandeDeclarationDetailless = value;
  }

  get demandeDeclarationDetaillesService(): DemandeDeclarationDetaillesService {
    return this._demandeDeclarationDetaillesService;
  }

  set demandeDeclarationDetaillesService(value: DemandeDeclarationDetaillesService) {
    this._demandeDeclarationDetaillesService = value;
  }
}
