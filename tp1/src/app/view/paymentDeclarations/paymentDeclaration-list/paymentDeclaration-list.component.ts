import {Component, OnInit} from '@angular/core';
import {PaymentDeclaration} from "../../../controler/model/paymentDeclaration.model";
import {PaymentDeclarationService} from "../../../controler/service/paymentDeclaration.service";

@Component({
  selector: 'app-paymentDeclaration-list',
  templateUrl: './paymentDeclaration-list.component.html',
  styleUrls: ['./paymentDeclaration-list.component.css']
})
export class PaymentDeclarationListComponent implements OnInit{


  constructor(private _paymentDeclarationService: PaymentDeclarationService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this._paymentDeclarationService.findAll().subscribe(data =>  this.paymentDeclarations = data );
  }

  public deleteByCode(paymentDeclaration: PaymentDeclaration, index: number): void{
    console.log('le code ' + paymentDeclaration.code);
    this.paymentDeclaration = paymentDeclaration;
    this._paymentDeclarationService.deleteByCode().subscribe(data =>  {
      if(data>0){
        this.paymentDeclarations.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
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
