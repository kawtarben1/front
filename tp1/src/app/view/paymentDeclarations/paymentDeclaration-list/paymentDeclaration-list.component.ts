import {Component, OnInit} from '@angular/core';
import {PaymentDeclaration} from "../../../controler/model/paymentDeclaration.model";
import {PaymentDeclarationService} from "../../../controler/service/paymentDeclaration.service";

@Component({
  selector: 'app-paymentDeclaration-list',
  templateUrl: './paymentDeclaration-list.component.html',
  styleUrls: ['./paymentDeclaration-list.component.css']
})
export class PaymentDeclarationListComponent implements OnInit{


  constructor(private paymentDeclarationService: PaymentDeclarationService) {
  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.paymentDeclarationService.findAll().subscribe(data =>  this.paymentDeclarations = data );
  }

  public deleteByCode(paymentDeclaration: PaymentDeclaration, index: number): void{
    console.log('le code ' + paymentDeclaration.code);
    this.paymentDeclaration = paymentDeclaration;
    this.paymentDeclarationService.deleteByCode().subscribe(data =>  {
      if(data>0){
        this.paymentDeclarations.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    } );
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
