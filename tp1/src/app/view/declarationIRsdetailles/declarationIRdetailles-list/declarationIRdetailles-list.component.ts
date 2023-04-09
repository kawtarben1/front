import {Component, OnInit} from '@angular/core';
import {DeclarationIRdetailles} from "../../../controler/model/declarationIRdetailles.model";
import {DeclarationIRdetaillesService} from "../../../controler/service/declarationIRdetailles.service";
@Component({
  selector: 'app-declarationIRdetailles-list',
  templateUrl: './declarationIRdetailles-list.component.html',
  styleUrls: ['./declarationIRdetailles-list.component.css']
})
export class DeclarationIRdetaillesListComponent implements OnInit{
  constructor(private declarationIRdetaillesService: DeclarationIRdetaillesService) {
  }
  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): void{
    this.declarationIRdetaillesService.findAll().subscribe(data =>  this.declarationIRdetailless = data );
  }
  public deleteByCode(declarationIRdetailles: DeclarationIRdetailles, index: number): void{
    console.log('le code ' + declarationIRdetailles.code);
    this.declarationIRdetailles = declarationIRdetailles;
    this.declarationIRdetaillesService.deleteByCode().subscribe(data =>  {
      if(data>0){
        this.declarationIRdetailless.splice(index, 1);
      }else{
        alert('DELETE ERROR');
      }
    } );
  }
  get declarationIRdetailles():DeclarationIRdetailles{

    return this.declarationIRdetaillesService.declarationIRdetailles;
  }

  set declarationIRdetailles(value: DeclarationIRdetailles) {
    this.declarationIRdetaillesService.declarationIRdetailles = value;
  }

  get declarationIRdetailless(): Array<DeclarationIRdetailles> {

    return this.declarationIRdetaillesService.declarationIRdetailless;
  }

  set declarationIRdetailless(value: Array<DeclarationIRdetailles>) {
    this.declarationIRdetaillesService.declarationIRdetailless = value;
  }

}
