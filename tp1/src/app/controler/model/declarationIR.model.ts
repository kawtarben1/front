import {DeclarationIRdetailles} from "./declarationIRdetailles.model";

export class DeclarationIR {
  public declarationir_id !:number ;
  public code !:string ;
  public totalTaxe !:number;
  public salaireTotalNet !:number ;
  public salaireTotalBrute !:number;
  public date = new Date();
  public declarationIRdetailles = new Array<DeclarationIRdetailles>();


  constructor() {
    this.totalTaxe = 0;
    this.salaireTotalNet = 0;
    this.salaireTotalBrute = 0;
  }


}


