import {Component, OnInit} from '@angular/core';
import {TypeFactureService} from "../../../controler/service/typeFacture.service";
import {TypeFacture} from "../../../controler/model/typeFacture.model";

@Component({
  selector: 'app-typeFacture-list',
  templateUrl: './typeFacture-list.component.html',
  styleUrls: ['./typeFacture-list.component.css']
})
export class TypeFactureListComponent implements OnInit{


  constructor(private typeFactureService: TypeFactureService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.typeFactureService.findAll().subscribe(data =>  this.typeFactures = data );
  }

  public deleteByCode(typeFacture: TypeFacture, index: number): void{
    console.log('le code ' + typeFacture.code);
    this.typeFacture = typeFacture;
    this.typeFactureService.deleteByCode(typeFacture.code).subscribe(data =>  {
      if(data>0){
        this.typeFactures.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
  }

  get typeFacture(): TypeFacture {

    return this.typeFactureService.typeFacture;
  }

  set typeFacture(value: TypeFacture) {
    this.typeFactureService.typeFacture = value;
  }

  get typeFactures(): Array<TypeFacture> {

    return this.typeFactureService.typeFactures;
  }

  set typeFactures(value: Array<TypeFacture>) {
    this.typeFactureService.typeFactures = value;
  }

}
