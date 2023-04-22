import {CategorieComptable} from "./categorieComptable.model";
import {DeclarationIRdetailles} from "./declarationIRdetailles.model";
import {DemandeDeclaration} from "./demandeDeclaration.model";

export class Comptable {
  public comptable_id !:number ;
  public cin!:string;
  public nom!:string ;
  public prenom!:string ;
  public categorieComptable = new CategorieComptable();
  public comptableDeclarants = new Array<DemandeDeclaration>();
  public comptableVerifiants = new Array<DemandeDeclaration>();

}
