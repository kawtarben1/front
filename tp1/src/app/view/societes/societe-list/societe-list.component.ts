import {Component, OnInit} from '@angular/core';
import {SocieteService} from "../../../controler/service/societe.service";
import {Societe} from "../../../controler/model/societe.model";

@Component({
  selector: 'app-societe-list',
  templateUrl: './societe-list.component.html',
  styleUrls: ['./societe-list.component.css']
})
export class SocieteListComponent implements OnInit{


  constructor(private societeService: SocieteService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.societeService.findAll().subscribe(data =>  this.societes = data );
  }

  public deleteByIce(societe: Societe, index: number): void{
    console.log('le ice ' + societe.ice);
    this.societe = societe;
    this.societeService.deleteByIce().subscribe(data =>  {
      if(data>0){
        this.societes.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
  }

  get societe(): Societe {

    return this.societeService.societe;
  }

  set societe(value: Societe) {
    this.societeService.societe = value;
  }

  get societes(): Array<Societe> {

    return this.societeService.societes;
  }

  set societes(value: Array<Societe>) {
    this.societeService.societes = value;
  }

}
