import {DeclarationIR} from "./declarationIR.model";
import {Employe} from "./employe.model";
import {Societe} from "./societe.model";
import {Comptable} from "./comptable.model";
import {CategorieDeclaration} from "./categorieDeclaration.model";

export class DemandeDeclaration {
  public id !:number ;
  public ref !:string ;
  public dateDeclaration = new Date() ;
  public categorieDeclaration = new CategorieDeclaration() ;
  public totalPaye !:number;
  public total!:number ;
  public totalEsps !:number;
  public totalNonEsps !:number;
  public comptableDeclarant = new Comptable();
  public comptableVerifiant = new Comptable();
  public societe = new Societe();
}



