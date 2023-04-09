import {Component, OnInit} from '@angular/core';
import {DemandeDeclarationService} from "../../../controler/service/demandeDeclaration.service";
import {DemandeDeclaration} from "../../../controler/model/demandeDeclaration.model";

@Component({
  selector: 'app-demandeDeclaration-create',
  templateUrl: './demandeDeclaration-create.component.html',
  styleUrls: ['./demandeDeclaration-create.component.css']
})
export class DemandeDeclarationCreateComponent implements OnInit{
  constructor(private demandeDeclarationService: DemandeDeclarationService) {
  }
  ngOnInit(): void {
  }
  public save(): void {
    this.demandeDeclarationService.save().subscribe(data => {
      if (data != null) {
        this.demandeDeclarations.push({...this.demandeDeclaration});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CIN EXIST');
      }
    });
  }

  get demandeDeclaration(): DemandeDeclaration {

    return this.demandeDeclarationService.demandeDeclaration;
  }

  set demandeDeclaration(value: DemandeDeclaration) {
    this.demandeDeclarationService.demandeDeclaration = value;
  }

  get demandeDeclarations(): Array<DemandeDeclaration> {

    return this.demandeDeclarationService.demandeDeclarations;
  }

  set demandeDeclarations(value: Array<DemandeDeclaration>) {
    this.demandeDeclarationService.demandeDeclarations = value;
  }

}
