import {Component, OnInit} from '@angular/core';
import {TypePaymentService} from "../../../controler/service/typePayment.service";
import {TypePayment} from "../../../controler/model/typePayment.model";

@Component({
  selector: 'app-typePayment-list',
  templateUrl: './typePayment-list.component.html',
  styleUrls: ['./typePayment-list.component.css']
})
export class TypePaymentListComponent implements OnInit{


  constructor(private _typePaymentService: TypePaymentService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this._typePaymentService.findAll().subscribe(data =>  this.typePayments = data );
  }

  public deleteByCode(typePayment: TypePayment, index: number): void{
    console.log('le code ' + typePayment.code);
    this.typePayment = typePayment;
    this._typePaymentService.deleteByCode().subscribe(data =>  {
      if(data>0){
        this.typePayments.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
  }

  get typePayment(): TypePayment {

    return this._typePaymentService.typePayment;
  }

  set typePayment(value: TypePayment) {
    this._typePaymentService.typePayment = value;
  }

  get typePayments(): Array<TypePayment> {

    return this._typePaymentService.typePayments;
  }

  set typePayments(value: Array<TypePayment>) {
    this._typePaymentService.typePayments = value;
  }

  get typePaymentService(): TypePaymentService {
    return this._typePaymentService;
  }

  set typePaymentService(value: TypePaymentService) {
    this._typePaymentService = value;
  }
}
