import {CategorieSociete} from "./categorieSociete.model";

export class Societe {
  public societe_id !:number ;
  public ice !:string ;
  public libelle !:string ;
  public categorieSociete = new CategorieSociete() ;
}

