import {Component, OnInit} from '@angular/core';
import {CategorieSocieteService} from "src/app/controler/service/categorieSociete.service";
import {CategorieSociete} from "../../../controler/model/categorieSociete.model";


@Component({
  selector: 'app-categoriesociete-list',
  templateUrl: './categoriesociete-list.component.html',
  styleUrls: ['./categoriesociete-list.component.css']
})
export class CategoriesocieteListComponent implements OnInit{
  constructor(private categorieSocieteService: CategorieSocieteService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.categorieSocieteService.findAll().subscribe(data =>  this.categoriesocietes = data );
  }

  public deleteByCode(categoriesociete: CategorieSociete, index: number): void{
    console.log('le code ' + categoriesociete.code);
    this.categoriesociete = categoriesociete;
    this.categorieSocieteService.deleteByCode().subscribe(data =>  {
      if(data>0){
        this.categoriesocietes.splice(index, 1);
      }else{
        alert('DELETE ERROR');
      }
    } );
  }
  get categoriesociete(): CategorieSociete {

    return this.categorieSocieteService.categoriesociete;
  }

  set categoriesociete(value: CategorieSociete) {
    this.categorieSocieteService.categoriesociete = value;
  }

  get categoriesocietes(): Array<CategorieSociete> {

    return this.categorieSocieteService.categoriesocietes;
  }

  set categoriesocietes(value: Array<CategorieSociete>) {
    this.categorieSocieteService.categoriesocietes = value;
  }


}
