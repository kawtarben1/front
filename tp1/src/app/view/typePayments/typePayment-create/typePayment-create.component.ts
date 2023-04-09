import {Component, OnInit} from '@angular/core';
import {TypePaymentService} from "../../../controler/service/typePayment.service";
import {TypePayment} from "../../../controler/model/typePayment.model";

@Component({
  selector: 'app-typePayment-create',
  templateUrl: './typePayment-create.component.html',
  styleUrls: ['./typePayment-create.component.css']
})
export class TypePaymentCreateComponent implements OnInit{
  constructor(private typePaymentService: TypePaymentService) {
  }
  ngOnInit(): void {
  }
  public save(): void {
    this.typePaymentService.save().subscribe(data => {
      if (data != null) {
        this.typePayments.push({...this.typePayment});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CIN EXIST');
      }
    });
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
