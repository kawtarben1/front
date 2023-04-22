import {Component, OnInit} from '@angular/core';
import {EmployeService} from "../../../controler/service/employe.service";
import {Employe} from "../../../controler/model/employe.model";


@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit{


  constructor(private _employeService: EmployeService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this._employeService.findAll().subscribe(data =>  this.employes = data );
  }

  public deleteByCin(employe: Employe, index: number): void{
    console.log('le cin ' + employe.cin);
    this.employe = employe;
    this._employeService.deleteByCin().subscribe(data =>  {
      if(data>0){
        this.employes.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
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
