import {DemandeDeclaration} from "./demandeDeclaration.model";
import {TypePayment} from "./typePayment.model";

export class PaymentDeclaration {
  public id !:number ;
  public code !:string ;
  public montant !:number ;
  public datePayment = new Date();
  public typePayment = new TypePayment() ;
  public demandeDeclaration = new DemandeDeclaration() ;
}
