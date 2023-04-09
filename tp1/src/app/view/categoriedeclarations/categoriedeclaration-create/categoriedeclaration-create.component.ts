import {Component, OnInit} from '@angular/core';
import {CategorieDeclarationService} from "src/app/controler/service/categorieDeclaration.service";
import {CategorieDeclaration} from "../../../controler/model/categorieDeclaration.model";

@Component({
  selector: 'app-categoriedeclaration-create',
  templateUrl: './categoriedeclaration-create.component.html',
  styleUrls: ['./categoriedeclaration-create.component.css']
})
export class CategorieDeclarationCreateComponent implements OnInit{
  constructor(private CategorieDeclarationService: CategorieDeclarationService) {
  }
  ngOnInit(): void {
  }
  public save(): void {
    this.CategorieDeclarationService.save().subscribe(data => {
      if (data != null) {
        this.categoriedeclarations.push({...this.categoriedeclaration});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CODE EXIST');
      }
    });
  }

  get categoriedeclaration(): CategorieDeclaration {

    return this.CategorieDeclarationService.categoriedeclaration;
  }

  set categoriedeclaration(value: CategorieDeclaration) {
    this.CategorieDeclarationService.categoriedeclaration = value;
  }

  get categoriedeclarations(): Array<CategorieDeclaration> {

    return this.CategorieDeclarationService.categoriedeclarations;
  }

  set categoriedeclarations(value: Array<CategorieDeclaration>) {
    this.CategorieDeclarationService.categoriedeclarations = value;
  }
}
