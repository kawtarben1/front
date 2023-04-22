import {Component, OnInit} from '@angular/core';
import {DemandeDeclarationService} from "../../../controler/service/demandeDeclaration.service";
import {DemandeDeclaration} from "../../../controler/model/demandeDeclaration.model";

@Component({
  selector: 'app-demandeDeclaration-create',
  templateUrl: './demandeDeclaration-create.component.html',
  styleUrls: ['./demandeDeclaration-create.component.css']
})
export class DemandeDeclarationCreateComponent implements OnInit{
  constructor(private _demandeDeclarationService: DemandeDeclarationService) {
  }
  ngOnInit(): void {
  }
  public save(): void {
    this._demandeDeclarationService.save().subscribe(data => {
      if (data != null) {
        this.demandeDeclarations.push({...this.demandeDeclaration});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CIN EXIST');
      }
    });
  }

  get demandeDeclaration(): DemandeDeclaration {

    return this._demandeDeclarationService.demandeDeclaration;
  }

  set demandeDeclaration(value: DemandeDeclaration) {
    this._demandeDeclarationService.demandeDeclaration = value;
  }

  get demandeDeclarations(): Array<DemandeDeclaration> {

    return this._demandeDeclarationService.demandeDeclarations;
  }

  set demandeDeclarations(value: Array<DemandeDeclaration>) {
    this._demandeDeclarationService.demandeDeclarations = value;
  }

  get demandeDeclarationService(): DemandeDeclarationService {
    return this._demandeDeclarationService;
  }

  set demandeDeclarationService(value: DemandeDeclarationService) {
    this._demandeDeclarationService = value;
  }
}
