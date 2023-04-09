import {Component, OnInit} from '@angular/core';
import {PaymentDeclarationService} from "../../../controler/service/paymentDeclaration.service";
import {PaymentDeclaration} from "../../../controler/model/paymentDeclaration.model";

@Component({
  selector: 'app-paymentDeclaration-create',
  templateUrl: './paymentDeclaration-create.component.html',
  styleUrls: ['./paymentDeclaration-create.component.css']
})
export class PaymentDeclarationCreateComponent implements OnInit{
  constructor(private paymentDeclarationService: PaymentDeclarationService) {
  }
  ngOnInit(): void {
  }
  public save(): void {
    this.paymentDeclarationService.save().subscribe(data => {
      if (data != null) {
        this.paymentDeclarations.push({...this.paymentDeclaration});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CIN EXIST');
      }
    });
  }

  get paymentDeclaration(): PaymentDeclaration {

    return this.paymentDeclarationService.paymentDeclaration;
  }

  set paymentDeclaration(value: PaymentDeclaration) {
    this.paymentDeclarationService.paymentDeclaration = value;
  }

  get paymentDeclarations(): Array<PaymentDeclaration> {

    return this.paymentDeclarationService.paymentDeclarations;
  }

  set paymentDeclarations(value: Array<PaymentDeclaration>) {
    this.paymentDeclarationService.paymentDeclarations = value;
  }

}
