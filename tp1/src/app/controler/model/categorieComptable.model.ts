import {DeclarationIRdetailles} from "./declarationIRdetailles.model";
import {Comptable} from "./comptable.model";

export class CategorieComptable {
  public categorie_comptable_id!:number;
  public libelle! :string ;
  public  code!:string ;
  public comptables = new Array<Comptable>();

}
