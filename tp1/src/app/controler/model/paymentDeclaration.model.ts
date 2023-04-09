import {DemandeDeclaration} from "./demandeDeclaration.model";
import {TypePayment} from "./typePayment.model";

export class PaymentDeclaration {
  public id !:number ;
  public code !:string ;
  public montant !:number ;
  public datePayment !:Date;
  public typePayment !:TypePayment ;
  public demandeDeclaration !:DemandeDeclaration ;
}
