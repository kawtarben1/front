import {Component, OnInit} from '@angular/core';
import {CategorieDeclaration} from "src/app/controler/model/categorieDeclaration.model";

import {CategorieDeclarationService} from "src/app/controler/service/categorieDeclaration.service";



@Component({
  selector: 'app-categoriedeclaration-list',
  templateUrl: './categoriedeclaration-list.component.html',
  styleUrls: ['./categoriedeclaration-list.component.css']
})
export class CategorieDeclarationListComponent implements OnInit{

  constructor(private categorieDeclarationService: CategorieDeclarationService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.categorieDeclarationService.findAll().subscribe(data =>  this.categoriedeclarations = data );
  }


  public deleteByCode(categoriedeclaration: CategorieDeclaration, index: number): void{
    console.log('le code ' + categoriedeclaration.code);
    this.categoriedeclaration = categoriedeclaration;
    this.categorieDeclarationService.deleteByCode().subscribe(data =>  {
      if(data>0){
        this.categoriedeclarations.splice(index, 1);
      }else{
        alert('DELETE ERROR');
      }
    } );
  }
  get categoriedeclaration(): CategorieDeclaration {

    return this.categorieDeclarationService.categoriedeclaration;
  }

  set categoriedeclaration(value: CategorieDeclaration) {
    this.categorieDeclarationService.categoriedeclaration = value;
  }

  get categoriedeclarations(): Array<CategorieDeclaration> {

    return this.categorieDeclarationService.categoriedeclarations;
  }

  set categoriedeclarations(value: Array<CategorieDeclaration>) {
    this.categorieDeclarationService.categoriedeclarations = value;
  }
}
