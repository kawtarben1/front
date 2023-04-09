import {Component, OnInit} from '@angular/core';
import {EmployeService} from "../../../controler/service/employe.service";
import {Employe} from "../../../controler/model/employe.model";


@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit{


  constructor(private employeService: EmployeService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.employeService.findAll().subscribe(data =>  this.employes = data );
  }

  public deleteByCin(employe: Employe, index: number): void{
    console.log('le cin ' + employe.cin);
    this.employe = employe;
    this.employeService.deleteByCin().subscribe(data =>  {
      if(data>0){
        this.employes.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
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
