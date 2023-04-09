import {Component, OnInit} from '@angular/core';
import {DemandeDeclarationService} from "../../../controler/service/demandeDeclaration.service";
import {DemandeDeclaration} from "../../../controler/model/demandeDeclaration.model";

@Component({
  selector: 'app-demandeDeclaration-list',
  templateUrl: './demandeDeclaration-list.component.html',
  styleUrls: ['./demandeDeclaration-list.component.css']
})
export class DemandeDeclarationListComponent implements OnInit{
  constructor(private demandeDeclarationService: DemandeDeclarationService) {
  }
  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): void{
    this.demandeDeclarationService.findAll().subscribe(data =>  this.demandeDeclarations = data );
  }
  public deleteByRef(demandeDeclaration: DemandeDeclaration, index: number): void{
    console.log('la reference ' + demandeDeclaration.ref);
    this.demandeDeclaration = demandeDeclaration;
    this.demandeDeclarationService.deleteByRef().subscribe(data =>  {
      if(data>0){
        this.demandeDeclarations.splice(index, 1);
      }else{
        alert('DELETE ERROR');
      }
    } );
  }
  get demandeDeclaration():DemandeDeclaration{

    return this.demandeDeclarationService.demandeDeclaration;
  }

  set demandeDeclaration(value: DemandeDeclaration) {
    this.demandeDeclarationService.demandeDeclaration = value;
  }

  get demandeDeclarations(): Array<DemandeDeclaration> {

    return this.demandeDeclarationService.demandeDeclarations;
  }

  set demandeDeclarations(value: Array<DemandeDeclaration>) {
    this.demandeDeclarationService.demandeDeclarations = value;
  }

}
