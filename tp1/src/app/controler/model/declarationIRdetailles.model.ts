import {DemandeDeclaration} from "./demandeDeclaration.model";
import {TauxIR} from "./tauxIR.model";
import {Employe} from "./employe.model";
import {DeclarationIR} from "./declarationIR.model";

export class DeclarationIRdetailles {
  public declarationir_detailles_id !:number ;
  public code !:string ;
  public declarationIR = new DeclarationIR() ;
  public salaireEmployeNet !:number;
  public salaireEmployeBrute!:number ;
  public montantIR !:number;
  public employe = new Employe();
  public tauxIR = new TauxIR();
  public demandeDeclaration = new DemandeDeclaration();

}





