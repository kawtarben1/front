import {Component, OnInit} from '@angular/core';
import {DemandeDeclarationDetaillesService} from "../../../controler/service/demandeDeclarationDetailles.service";
import {DemandeDeclarationDetailles} from "../../../controler/model/demandeDeclarationDetailles.model";


@Component({
  selector: 'app-demandeDeclarationDetailles-create',
  templateUrl: './demandeDeclarationDetailles-create.component.html',
  styleUrls: ['./demandeDeclarationDetailles-create.component.css']
})
export class DemandeDeclarationDetaillesCreateComponent implements OnInit{
  constructor(private demandeDeclarationDetaillesService: DemandeDeclarationDetaillesService) {
  }
  ngOnInit(): void {
  }
  public save(): void {
    this.demandeDeclarationDetaillesService.save().subscribe(data => {
      if (data != null) {
        this.demandeDeclarationDetailless.push({...this.demandeDeclarationDetailles});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CIN EXIST');
      }
    });
  }

  get demandeDeclarationDetailles(): DemandeDeclarationDetailles {

    return this.demandeDeclarationDetaillesService.demandeDeclarationDetailles;
  }

  set demandeDeclarationDetailles(value: DemandeDeclarationDetailles) {
    this.demandeDeclarationDetaillesService.demandeDeclarationDetailles = value;
  }

  get demandeDeclarationDetailless(): Array<DemandeDeclarationDetailles> {

    return this.demandeDeclarationDetaillesService.demandeDeclarationDetailless;
  }

  set demandeDeclarationDetailless(value: Array<DemandeDeclarationDetailles>) {
    this.demandeDeclarationDetaillesService.demandeDeclarationDetailless = value;
  }

}
