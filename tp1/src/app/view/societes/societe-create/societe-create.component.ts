import {Component, OnInit} from '@angular/core';
import {SocieteService} from "../../../controler/service/societe.service";
import {Societe} from "../../../controler/model/societe.model";

@Component({
  selector: 'app-societe-create',
  templateUrl: './societe-create.component.html',
  styleUrls: ['./societe-create.component.css']
})
export class SocieteCreateComponent implements OnInit{
  constructor(private _societeService: SocieteService) {
  }
  ngOnInit(): void {
  }
  public save(): void {
    this._societeService.save().subscribe(data => {
      if (data != null) {
        this.societes.push({...this.societe});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CIN EXIST');
      }
    });
  }

  get societe(): Societe {

    return this._societeService.societe;
  }

  set societe(value: Societe) {
    this._societeService.societe = value;
  }

  get societes(): Array<Societe> {

    return this._societeService.societes;
  }

  set societes(value: Array<Societe>) {
    this._societeService.societes = value;
  }

  get societeService(): SocieteService {
    return this._societeService;
  }

  set societeService(value: SocieteService) {
    this._societeService = value;
  }
}
