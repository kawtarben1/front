import {DemandeDeclaration} from "./demandeDeclaration.model";

export class DemandeDeclarationDetailles {
  public demande_declaration_detailles_id !:number ;
  public ref !:string ;
  public pathFichier !:string ;
  public description !:string;
  public demandeDeclaration = new DemandeDeclaration() ;

}


