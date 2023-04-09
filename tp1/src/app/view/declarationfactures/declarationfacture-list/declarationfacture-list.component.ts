import {Component, OnInit} from '@angular/core';
import {DeclarationFacture} from "src/app/controler/model/declarationFacture.model";
import {DeclarationFactureService} from "src/app/controler/service/declarationFacture.service";


@Component({
  selector: 'app-declarationfacture-list',
  templateUrl: './declarationfacture-list.component.html',
  styleUrls: ['./declarationfacture-list.component.css']
})
export class DeclarationfactureListComponent implements OnInit{

  constructor(private declarationFactureService: DeclarationFactureService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.declarationFactureService.findAll().subscribe(data =>  this.declarationfactures = data );
  }

  public deleteByTypeFactureref(declarationfacture: DeclarationFacture, index: number): void{
    console.log('la reference ' + declarationfacture.ref);
    this.declarationfacture = declarationfacture;
    this.declarationFactureService.deleteByTypeFactureref().subscribe(data =>  {
      if(data>0){
        this.declarationfactures.splice(index, 1);
      }else{
        alert('DELETE ERROR');
      }
    } );
  }
  get declarationfacture():DeclarationFacture{

    return this.declarationFactureService.declarationFacture;
  }

  set declarationfacture(value: DeclarationFacture) {
    this.declarationFactureService.declarationFacture = value;
  }

  get declarationfactures(): Array<DeclarationFacture> {

    return this.declarationFactureService.declarationFactures;
  }

  set declarationfactures(value: Array<DeclarationFacture>) {
    this.declarationFactureService.declarationFactures = value;
  }
}
