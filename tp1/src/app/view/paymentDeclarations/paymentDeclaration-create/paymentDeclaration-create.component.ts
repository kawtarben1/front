import {Component, OnInit} from '@angular/core';
import {PaymentDeclarationService} from "../../../controler/service/paymentDeclaration.service";
import {PaymentDeclaration} from "../../../controler/model/paymentDeclaration.model";

@Component({
  selector: 'app-paymentDeclaration-create',
  templateUrl: './paymentDeclaration-create.component.html',
  styleUrls: ['./paymentDeclaration-create.component.css']
})
export class PaymentDeclarationCreateComponent implements OnInit{
  constructor(private _paymentDeclarationService: PaymentDeclarationService) {
  }
  ngOnInit(): void {
  }
  public save(): void {
    this._paymentDeclarationService.save().subscribe(data => {
      if (data != null) {
        this.paymentDeclarations.push({...this.paymentDeclaration});
        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: CIN EXIST');
      }
    });
  }
  get paymentDeclaration(): PaymentDeclaration {

    return this._paymentDeclarationService.paymentDeclaration;
  }

  set paymentDeclaration(value: PaymentDeclaration) {
    this._paymentDeclarationService.paymentDeclaration = value;
  }

  get paymentDeclarations(): Array<PaymentDeclaration> {

    return this._paymentDeclarationService.paymentDeclarations;
  }

  set paymentDeclarations(value: Array<PaymentDeclaration>) {
    this._paymentDeclarationService.paymentDeclarations = value;
  }

  get paymentDeclarationService(): PaymentDeclarationService {
    return this._paymentDeclarationService;
  }

  set paymentDeclarationService(value: PaymentDeclarationService) {
    this._paymentDeclarationService = value;
  }
}
