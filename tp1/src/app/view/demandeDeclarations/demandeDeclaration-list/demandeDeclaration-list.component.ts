import {Component, OnInit} from '@angular/core';
import {DemandeDeclarationService} from "../../../controler/service/demandeDeclaration.service";
import {DemandeDeclaration} from "../../../controler/model/demandeDeclaration.model";

@Component({
  selector: 'app-demandeDeclaration-list',
  templateUrl: './demandeDeclaration-list.component.html',
  styleUrls: ['./demandeDeclaration-list.component.css']
})
export class DemandeDeclarationListComponent implements OnInit{
  constructor(private _demandeDeclarationService: DemandeDeclarationService) {
  }
  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): void{
    this._demandeDeclarationService.findAll().subscribe(data =>  this.demandeDeclarations = data );
  }
  public deleteByRef(demandeDeclaration: DemandeDeclaration, index: number): void{
    console.log('la reference ' + demandeDeclaration.ref);
    this.demandeDeclaration = demandeDeclaration;
    this._demandeDeclarationService.deleteByRef().subscribe(data =>  {
      if(data>0){
        this.demandeDeclarations.splice(index, 1);
      }else{
        alert('DELETE ERROR');
      }
    } );
  }
  get demandeDeclaration():DemandeDeclaration{

    return this._demandeDeclarationService.demandeDeclaration;
  }

  set demandeDeclaration(value: DemandeDeclaration) {
    this._demandeDeclarationService.demandeDeclaration = value;
  }

  get demandeDeclarations(): Array<DemandeDeclaration> {

    return this._demandeDeclarationService.demandeDeclarations;
  }

  set demandeDeclarations(value: Array<DemandeDeclaration>) {
    this._demandeDeclarationService.demandeDeclarations = value;
  }

  get demandeDeclarationService(): DemandeDeclarationService {
    return this._demandeDeclarationService;
  }

  set demandeDeclarationService(value: DemandeDeclarationService) {
    this._demandeDeclarationService = value;
  }
}
