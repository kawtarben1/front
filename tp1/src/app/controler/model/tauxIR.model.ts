import {DeclarationIRdetailles} from "./declarationIRdetailles.model";

export class TauxIR {
  public tauxir_id !:number ;
  public pourcentage !:number ;
  public salaireMin !:number ;
  public salaireMax !:number ;
  public libelle !:string ;
  public declarationIRdetailles = new Array<DeclarationIRdetailles> ;


}

