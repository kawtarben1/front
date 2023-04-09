import {DeclarationIRdetailles} from "./declarationIRdetailles.model";

export class DeclarationIR {
  public id !:number ;
  public code !:string ;
  public totalTaxe !:number;
  public salaireTotalNet !:number ;
  public salaireTotalBrute !:number;
  public date !:Date;
  public declarationIRdetailles !: Array<DeclarationIRdetailles>;
}


