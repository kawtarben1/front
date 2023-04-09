import {Component, OnInit} from '@angular/core';
import {DemandeDeclarationDetaillesService} from "../../../controler/service/demandeDeclarationDetailles.service";
import {DemandeDeclarationDetailles} from "../../../controler/model/demandeDeclarationDetailles.model";

@Component({
  selector: 'app-demandeDeclarationDetailles-list',
  templateUrl: './demandeDeclarationDetailles-list.component.html',
  styleUrls: ['./demandeDeclarationDetailles-list.component.css']
})
export class DemandeDeclarationDetaillesListComponent implements OnInit{
  constructor(private demandeDeclarationDetaillesService: DemandeDeclarationDetaillesService) {
  }
  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): void{
    this.demandeDeclarationDetaillesService.findAll().subscribe(data =>  this.demandeDeclarationDetailless = data );
  }
  public deleteByRef(demandeDeclarationDetailles: DemandeDeclarationDetailles, index: number): void{
    console.log('la reference ' + demandeDeclarationDetailles.ref);
    this.demandeDeclarationDetailles = demandeDeclarationDetailles;
    this.demandeDeclarationDetaillesService.deleteByRef().subscribe(data =>  {
      if(data>0){
        this.demandeDeclarationDetailless.splice(index, 1);
      }else{
        alert('DELETE ERROR');
      }
    } );
  }
  get demandeDeclarationDetailles():DemandeDeclarationDetailles{

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
