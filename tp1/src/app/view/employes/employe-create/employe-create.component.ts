import {Component, OnInit} from '@angular/core';
import {EmployeService} from "../../../controler/service/employe.service";
import {Employe} from "../../../controler/model/employe.model";

@Component({
  selector: 'app-employe-create',
  templateUrl: './employe-create.component.html',
  styleUrls: ['./employe-create.component.css']
})
export class EmployeCreateComponent implements OnInit {

  constructor(private employeService: EmployeService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this.employeService.save().subscribe(data => {
      if (data != null) {
        this.employes.push({...this.employe});

        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CODE EXIST');
      }
    });
  }

  get employe(): Employe {

    return this.employeService.employe;
  }

  set employe(value: Employe) {
    this.employeService.employe = value;
  }

  get employes(): Array<Employe> {

    return this.employeService.employes;
  }

  set employes(value: Array<Employe>) {
    this.employeService.employes = value;
  }

}
