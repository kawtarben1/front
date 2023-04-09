import {DemandeDeclaration} from "./demandeDeclaration.model";
import {TauxIR} from "./tauxIR.model";
import {Employe} from "./employe.model";
import {DeclarationIR} from "./declarationIR.model";

export class DeclarationIRdetailles {
  public id !:number ;
  public code !:string ;
  public declarationIR !:DeclarationIR ;
  public salaireEmployeNet !:number;
  public salaireEmployeBrute!:number ;
  public montantIR !:number;
  public employe !:Employe;
  public tauxIR !:TauxIR;
  public demandeDeclaration !:DemandeDeclaration;
}





