import {Component, OnInit} from '@angular/core';
import {TypeFactureService} from "../../../controler/service/typeFacture.service";
import {TypeFacture} from "../../../controler/model/typeFacture.model";

@Component({
  selector: 'app-typeFacture-list',
  templateUrl: './typeFacture-list.component.html',
  styleUrls: ['./typeFacture-list.component.css']
})
export class TypeFactureListComponent implements OnInit{


  constructor(private _typeFactureService: TypeFactureService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this._typeFactureService.findAll().subscribe(data =>  this.typeFactures = data );
  }

  public deleteByCode(typeFacture: TypeFacture, index: number): void{
    console.log('le code ' + typeFacture.code);
    this.typeFacture = typeFacture;
    this._typeFactureService.deleteByCode(typeFacture.code).subscribe(data =>  {
      if(data>0){
        this.typeFactures.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
  }

  get typeFacture(): TypeFacture {

    return this._typeFactureService.typeFacture;
  }

  set typeFacture(value: TypeFacture) {
    this._typeFactureService.typeFacture = value;
  }

  get typeFactures(): Array<TypeFacture> {

    return this._typeFactureService.typeFactures;
  }

  set typeFactures(value: Array<TypeFacture>) {
    this._typeFactureService.typeFactures = value;
  }

  get typeFactureService(): TypeFactureService {
    return this._typeFactureService;
  }

  set typeFactureService(value: TypeFactureService) {
    this._typeFactureService = value;
  }
}
