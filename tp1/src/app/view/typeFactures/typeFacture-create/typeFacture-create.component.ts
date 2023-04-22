import {Component, OnInit} from '@angular/core';
import {TypeFactureService} from "../../../controler/service/typeFacture.service";
import {TypeFacture} from "../../../controler/model/typeFacture.model";

@Component({
  selector: 'app-typeFacture-create',
  templateUrl: './typeFacture-create.component.html',
  styleUrls: ['./typeFacture-create.component.css']
})
export class TypeFactureCreateComponent implements OnInit{
  constructor(private _typeFactureService: TypeFactureService) {
  }
  ngOnInit(): void {
  }
  public save(): void {
    this._typeFactureService.save().subscribe(data => {
      if (data != null) {
        this.typeFactures.push({...this.typeFacture});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CODE EXIST');
      }
    });
  }

  get typeFacture(): TypeFacture {

    return this._typeFactureService.typeFacture;
  }

  set typeFacture(value: TypeFacture) {
    this._typeFactureService.typeFacture = value;
  }

  get typeFactures(): Array<TypeFacture> {

    return this._typeFactureService.typeFactures;
  }

  set typeFactures(value: Array<TypeFacture>) {
    this._typeFactureService.typeFactures = value;
  }

  get typeFactureService(): TypeFactureService {
    return this._typeFactureService;
  }

  set typeFactureService(value: TypeFactureService) {
    this._typeFactureService = value;
  }
}
