import {Component, OnInit} from '@angular/core';
import {SocieteService} from "../../../controler/service/societe.service";
import {Societe} from "../../../controler/model/societe.model";

@Component({
  selector: 'app-societe-create',
  templateUrl: './societe-create.component.html',
  styleUrls: ['./societe-create.component.css']
})
export class SocieteCreateComponent implements OnInit{
  constructor(private societeService: SocieteService) {
  }
  ngOnInit(): void {
  }
  public save(): void {
    this.societeService.save().subscribe(data => {
      if (data != null) {
        this.societes.push({...this.societe});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CIN EXIST');
      }
    });
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
