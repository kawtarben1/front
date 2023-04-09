import {Component, OnInit} from '@angular/core';
import {TypeFactureService} from "../../../controler/service/typeFacture.service";
import {TypeFacture} from "../../../controler/model/typeFacture.model";

@Component({
  selector: 'app-typeFacture-create',
  templateUrl: './typeFacture-create.component.html',
  styleUrls: ['./typeFacture-create.component.css']
})
export class TypeFactureCreateComponent implements OnInit{
  constructor(private typeFactureService: TypeFactureService) {
  }
  ngOnInit(): void {
  }
  public save(): void {
    this.typeFactureService.save().subscribe(data => {
      if (data != null) {
        this.typeFactures.push({...this.typeFacture});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CIN EXIST');
      }
    });
  }

  get typeFacture(): TypeFacture {

    return this.typeFactureService.typeFacture;
  }

  set typeFacture(value: TypeFacture) {
    this.typeFactureService.typeFacture = value;
  }

  get typeFactures(): Array<TypeFacture> {

    return this.typeFactureService.typeFactures;
  }

  set typeFactures(value: Array<TypeFacture>) {
    this.typeFactureService.typeFactures = value;
  }

}
