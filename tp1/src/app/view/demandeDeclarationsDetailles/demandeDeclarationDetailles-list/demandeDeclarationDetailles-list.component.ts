import {Component, OnInit} from '@angular/core';
import {DemandeDeclarationDetaillesService} from "../../../controler/service/demandeDeclarationDetailles.service";
import {DemandeDeclarationDetailles} from "../../../controler/model/demandeDeclarationDetailles.model";

@Component({
  selector: 'app-demandeDeclarationDetailles-list',
  templateUrl: './demandeDeclarationDetailles-list.component.html',
  styleUrls: ['./demandeDeclarationDetailles-list.component.css']
})
export class DemandeDeclarationDetaillesListComponent implements OnInit{
  constructor(private _demandeDeclarationDetaillesService: DemandeDeclarationDetaillesService) {
  }
  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): void{
    this._demandeDeclarationDetaillesService.findAll().subscribe(data =>  this.demandeDeclarationDetailless = data );
  }
  public deleteByRef(demandeDeclarationDetailles: DemandeDeclarationDetailles, index: number): void{
    console.log('la reference ' + demandeDeclarationDetailles.ref);
    this.demandeDeclarationDetailles = demandeDeclarationDetailles;
    this._demandeDeclarationDetaillesService.deleteByRef().subscribe(data =>  {
      if(data>0){
        this.demandeDeclarationDetailless.splice(index, 1);
      }else{
        alert('DELETE ERROR');
      }
    } );
  }
  get demandeDeclarationDetailles():DemandeDeclarationDetailles{

    return this._demandeDeclarationDetaillesService.demandeDeclarationDetailles;
  }

  set demandeDeclarationDetailles(value: DemandeDeclarationDetailles) {
    this._demandeDeclarationDetaillesService.demandeDeclarationDetailles = value;
  }

  get demandeDeclarationDetailless(): Array<DemandeDeclarationDetailles> {

    return this._demandeDeclarationDetaillesService.demandeDeclarationDetailless;
  }

  set demandeDeclarationDetailless(value: Array<DemandeDeclarationDetailles>) {
    this._demandeDeclarationDetaillesService.demandeDeclarationDetailless = value;
  }

  get demandeDeclarationDetaillesService(): DemandeDeclarationDetaillesService {
    return this._demandeDeclarationDetaillesService;
  }

  set demandeDeclarationDetaillesService(value: DemandeDeclarationDetaillesService) {
    this._demandeDeclarationDetaillesService = value;
  }
}
