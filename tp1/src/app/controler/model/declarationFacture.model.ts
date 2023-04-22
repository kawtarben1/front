import {DemandeDeclaration} from "./demandeDeclaration.model";
import {TypeFacture} from "./typeFacture.model";

export class DeclarationFacture {
  public declaration_facture_id !:number ;
  public ref !:string ;
  public demandeDeclaration = new DemandeDeclaration() ;
  public montantTTC !:number;
  public tva!:number ;
  public montantHT !:number;
  public dateFacture = Date();
  public typeFacture = new TypeFacture();
}
