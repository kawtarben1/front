import {Societe} from "./societe.model";
import {TauxIS} from "./taux-is.model";

export class DeclarationIS {
  public id!:number;
  public annee = new Date();
  public totalHTGain!: number;
  public totalHTCharge !: number;
  public totalHTDiff !: number;
  public montantISCalcule !: number;
  public montantISPaye !: number;
  public societe = new Societe();
  public tauxIS = new TauxIS();

}
