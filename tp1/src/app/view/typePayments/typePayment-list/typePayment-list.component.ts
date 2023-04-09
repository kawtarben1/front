import {Component, OnInit} from '@angular/core';
import {TypePaymentService} from "../../../controler/service/typePayment.service";
import {TypePayment} from "../../../controler/model/typePayment.model";

@Component({
  selector: 'app-typePayment-list',
  templateUrl: './typePayment-list.component.html',
  styleUrls: ['./typePayment-list.component.css']
})
export class TypePaymentListComponent implements OnInit{


  constructor(private typePaymentService: TypePaymentService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.typePaymentService.findAll().subscribe(data =>  this.typePayments = data );
  }

  public deleteByCode(typePayment: TypePayment, index: number): void{
    console.log('le code ' + typePayment.code);
    this.typePayment = typePayment;
    this.typePaymentService.deleteByCode().subscribe(data =>  {
      if(data>0){
        this.typePayments.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
  }

  get typePayment(): TypePayment {

    return this.typePaymentService.typePayment;
  }

  set typePayment(value: TypePayment) {
    this.typePaymentService.typePayment = value;
  }

  get typePayments(): Array<TypePayment> {

    return this.typePaymentService.typePayments;
  }

  set typePayments(value: Array<TypePayment>) {
    this.typePaymentService.typePayments = value;
  }

}
