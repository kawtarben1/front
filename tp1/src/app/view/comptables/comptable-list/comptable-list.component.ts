import {Component, OnInit} from '@angular/core';
import {Comptable} from "src/app/controler/model/comptable.model";
import {ComptableService} from "src/app/controler/service/comptable.service";


@Component({
  selector: 'app-comptable-list',
  templateUrl: './comptable-list.component.html',
  styleUrls: ['./comptable-list.component.css']
})
export class ComptableListComponent implements OnInit{
  constructor(private comptableService: ComptableService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.comptableService.findAll().subscribe(data =>  this.comptables = data );
  }

  public deleteByCin(comptable: Comptable, index: number): void{
    console.log('le cin ' + comptable.cin);
    this.comptable = comptable;
    this.comptableService.deleteByCin().subscribe(data =>  {
      if(data>0){
        this.comptables.splice(index, 1);
      }else{
        alert('DELETE ERROR');
      }
    } );
  }
  get comptable(): Comptable {

    return this.comptableService.comptable;
  }

  set comptable(value: Comptable) {
    this.comptableService.comptable = value;
  }

  get comptables(): Array<Comptable> {

    return this.comptableService.comptables;
  }

  set comptables(value: Array<Comptable>) {
    this.comptableService.comptables = value;
  }
}
