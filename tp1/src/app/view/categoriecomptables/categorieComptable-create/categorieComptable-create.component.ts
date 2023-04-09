import {Component, OnInit} from '@angular/core';

import {CategorieComptableService} from "src/app/controler/service/categorieComptable.service";
import {CategorieComptable} from "../../../controler/model/categorieComptable.model";

@Component({
  selector: 'app-categorieComptable-create',
  templateUrl: './categoriecomptable-create.component.html',
  styleUrls: ['./categoriecomptable-create.component.css']
})
export class CategorieComptableCreateComponent implements OnInit {

  constructor(private CategorieComptableService: CategorieComptableService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this.CategorieComptableService.save().subscribe(data => {
      if (data != null) {
        this.categoriecomptables.push({...this.categoriecomptable});

        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CODE EXIST');
      }
    });
  }

  get categoriecomptable(): CategorieComptable {

    return this.CategorieComptableService.categoriecomptable;
  }

  set categoriecomptable(value: CategorieComptable) {
    this.CategorieComptableService.categoriecomptable = value;
  }

  get categoriecomptables(): Array<CategorieComptable> {

    return this.CategorieComptableService.categoriecomptables;
  }

  set categoriecomptables(value: Array<CategorieComptable>) {
    this.CategorieComptableService.categoriecomptables = value;
  }

}
