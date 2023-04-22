import {Component, OnInit} from '@angular/core';
import {DeclarationIRdetailles} from "../../../controler/model/declarationIRdetailles.model";
import {DeclarationIRdetaillesService} from "../../../controler/service/declarationIRdetailles.service";
@Component({
  selector: 'app-declarationIRdetailles-list',
  templateUrl: './declarationIRdetailles-list.component.html',
  styleUrls: ['./declarationIRdetailles-list.component.css']
})
export class DeclarationIRdetaillesListComponent implements OnInit{
  constructor(private _declarationIRdetaillesService: DeclarationIRdetaillesService) {
  }
  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): void{
    this._declarationIRdetaillesService.findAll().subscribe(data =>  this.declarationIRdetailless = data );
  }
  public deleteByCode(declarationIRdetailles: DeclarationIRdetailles, index: number): void{
    console.log('le code ' + declarationIRdetailles.code);
    this.declarationIRdetailles = declarationIRdetailles;
    this._declarationIRdetaillesService.deleteByCode().subscribe(data =>  {
      if(data>0){
        this.declarationIRdetailless.splice(index, 1);
      }else{
        alert('DELETE ERROR');
      }
    } );
  }
  get declarationIRdetailles():DeclarationIRdetailles{

    return this._declarationIRdetaillesService.declarationIRdetailles;
  }

  set declarationIRdetailles(value: DeclarationIRdetailles) {
    this._declarationIRdetaillesService.declarationIRdetailles = value;
  }

  get declarationIRdetailless(): Array<DeclarationIRdetailles> {

    return this._declarationIRdetaillesService.declarationIRdetailless;
  }

  set declarationIRdetailless(value: Array<DeclarationIRdetailles>) {
    this._declarationIRdetaillesService.declarationIRdetailless = value;
  }

  get declarationIRdetaillesService(): DeclarationIRdetaillesService {
    return this._declarationIRdetaillesService;
  }

  set declarationIRdetaillesService(value: DeclarationIRdetaillesService) {
    this._declarationIRdetaillesService = value;
  }
}
