import {Component, OnInit} from '@angular/core';
import {EmployeService} from "../../../controler/service/employe.service";
import {Employe} from "../../../controler/model/employe.model";

@Component({
  selector: 'app-employe-create',
  templateUrl: './employe-create.component.html',
  styleUrls: ['./employe-create.component.css']
})
export class EmployeCreateComponent implements OnInit {

  constructor(private _employeService: EmployeService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this._employeService.save().subscribe(data => {
      if (data != null) {
        this.employes.push({...this.employe});

        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CODE EXIST');
      }
    });
  }

  get employe(): Employe {

    return this._employeService.employe;
  }

  set employe(value: Employe) {
    this._employeService.employe = value;
  }

  get employes(): Array<Employe> {

    return this._employeService.employes;
  }

  set employes(value: Array<Employe>) {
    this._employeService.employes = value;
  }

  get employeService(): EmployeService {
    return this._employeService;
  }

  set employeService(value: EmployeService) {
    this._employeService = value;
  }
}
