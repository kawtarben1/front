import {Component, OnInit} from '@angular/core';
import {CategorieComptable} from "src/app/controler/model/categorieComptable.model";
import {CategorieComptableService} from "src/app/controler/service/categorieComptable.service";

@Component({
  selector: 'app-categorieComptable-list',
  templateUrl: './categoriecomptable-list.component.html',
  styleUrls: ['./categoriecomptable-list.component.css']
})
export class CategoriecomptableListComponent implements OnInit{


  constructor(private CategorieComptableService: CategorieComptableService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.CategorieComptableService.findAll().subscribe(data =>  this.categoriecomptables = data );
  }

  public deleteByCode(categoriecomptable: CategorieComptable, index: number): void{
    console.log('le code ' + categoriecomptable.code);
    this.categoriecomptable = categoriecomptable;
    this.CategorieComptableService.deleteByCode(categoriecomptable.code).subscribe(data =>  {
   if(data>0){
     this.categoriecomptables.splice(index, 1);
   }else{
     alert('DEL ERROR');
   }
    } );
  }

  get categoriecomptable(): CategorieComptable {

    return this.CategorieComptableService.categoriecomptable;
  }

  set categoriecomptable(value: CategorieComptable) {
    this.CategorieComptableService.categoriecomptable = value;
  }

  get categoriecomptables(): Array<CategorieComptable> {

    return this.CategorieComptableService.categoriecomptables;
  }

  set categoriecomptables(value: Array<CategorieComptable>) {
    this.CategorieComptableService.categoriecomptables = value;
  }

}
