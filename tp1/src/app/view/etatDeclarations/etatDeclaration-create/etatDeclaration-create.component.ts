import {Component, OnInit} from '@angular/core';
import {EtatDeclarationService} from "../../../controler/service/etatDeclaration.service";
import {EtatDeclaration} from "../../../controler/model/etatDeclaration.model";

@Component({
  selector: 'app-etatDeclaration-create',
  templateUrl: './etatDeclaration-create.component.html',
  styleUrls: ['./etatDeclaration-create.component.css']
})
export class EtatDeclarationCreateComponent implements OnInit {

  constructor(private _etatDeclarationService: EtatDeclarationService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this._etatDeclarationService.save().subscribe(data => {
      if (data != null) {
        this.etatdeclarations.push({...this.etatdeclaration});

        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CODE EXIST');
      }
    });
  }

  get etatdeclaration(): EtatDeclaration {

    return this._etatDeclarationService.etatdeclaration;
  }

  set etatdeclaration(value: EtatDeclaration) {
    this._etatDeclarationService.etatdeclaration = value;
  }

  get etatdeclarations(): Array<EtatDeclaration> {

    return this._etatDeclarationService.etatdeclarations;
  }

  set etatdeclarations(value: Array<EtatDeclaration>) {
    this._etatDeclarationService.etatdeclarations = value;
  }

  get etatDeclarationService(): EtatDeclarationService {
    return this._etatDeclarationService;
  }

  set etatDeclarationService(value: EtatDeclarationService) {
    this._etatDeclarationService = value;
  }

}
