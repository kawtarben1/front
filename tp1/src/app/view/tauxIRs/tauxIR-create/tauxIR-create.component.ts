import {Component, OnInit} from '@angular/core';
import {TauIRService} from "../../../controler/service/tau-i-r.service";
import {TauxIR} from "../../../controler/model/tauxIR.model";

@Component({
  selector: 'app-tauxIR-create',
  templateUrl: './tauxIR-create.component.html',
  styleUrls: ['./tauxIR-create.component.css']
})
export class TauxIRCreateComponent implements OnInit{
  constructor(private tauxIRService: TauIRService) {
  }
  ngOnInit(): void {
  }
  public save(): void {
    this.tauxIRService.save().subscribe(data => {
      if (data != null) {
        this.tauxIRs.push({...this.tauxIR});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: LIBELLE EXIST');
      }
    });
  }

  get tauxIR(): TauxIR {

    return this.tauxIRService.tauxIR;
  }

  set tauxIR(value: TauxIR) {
    this.tauxIRService.tauxIR = value;
  }

  get tauxIRs(): Array<TauxIR> {

    return this.tauxIRService.tauxIRs;
  }

  set tauxIRs(value: Array<TauxIR>) {
    this.tauxIRService.tauxIRs = value;
  }

}
