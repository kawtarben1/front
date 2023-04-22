import {Component, OnInit} from '@angular/core';
import {EtatDeclarationService} from "../../../controler/service/etatDeclaration.service";
import {EtatDeclaration} from "../../../controler/model/etatDeclaration.model";

@Component({
  selector: 'app-etatDeclaration-list',
  templateUrl: './etatDeclaration-list.component.html',
  styleUrls: ['./etatDeclaration-list.component.css']
})
export class EtatDeclarationListComponent implements OnInit{


  constructor(private _etatDeclarationService: EtatDeclarationService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this._etatDeclarationService.findAll().subscribe(data =>  this.etatdeclarations = data );
  }

  public deleteByCode(etatdeclaration: EtatDeclaration, index: number): void{
    console.log('le code ' + etatdeclaration.code);
    this.etatdeclaration = etatdeclaration;
    this._etatDeclarationService.deleteByCode().subscribe(data =>  {
      if(data>0){
        this.etatdeclarations.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
  }

  get etatdeclaration(): EtatDeclaration {

    return this._etatDeclarationService.etatdeclaration;
  }

  set etatdeclaration(value: EtatDeclaration) {
    this._etatDeclarationService.etatdeclaration = value;
  }

  get etatdeclarations(): Array<EtatDeclaration> {

    return this._etatDeclarationService.etatdeclarations;
  }

  set etatdeclarations(value: Array<EtatDeclaration>) {
    this._etatDeclarationService.etatdeclarations = value;
  }

  get etatDeclarationService(): EtatDeclarationService {
    return this._etatDeclarationService;
  }

  set etatDeclarationService(value: EtatDeclarationService) {
    this._etatDeclarationService = value;
  }
}
