import {Component, OnInit} from '@angular/core';
import {CategorieSociete} from "src/app/controler/model/categorieSociete.model";
import {CategorieSocieteService} from "../../../controler/service/categorieSociete.service";


@Component({
  selector: 'app-categoriesociete-create',
  templateUrl: './categoriesociete-create.component.html',
  styleUrls: ['./categoriesociete-create.component.css']
})
export class CategorieSocieteCreateComponent implements OnInit{

  constructor(private CategorieSocieteService: CategorieSocieteService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this.CategorieSocieteService.save().subscribe(data => {
      if (data != null) {
        this.categoriesocietes.push({...this.categoriesociete});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CODE EXIST');
      }
    });
  }

  get categoriesociete(): CategorieSociete {

    return this.CategorieSocieteService.categoriesociete;
  }

  set categoriesociete(value: CategorieSociete) {
    this.CategorieSocieteService.categoriesociete = value;
  }

  get categoriesocietes(): Array<CategorieSociete> {

    return this.CategorieSocieteService.categoriesocietes;
  }

  set categoriesocietes(value: Array<CategorieSociete>) {
    this.CategorieSocieteService.categoriesocietes = value;
  }

}
