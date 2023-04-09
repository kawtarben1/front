import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComptableCreateComponent} from "./view/comptables/comptable-create/comptable-create.component";
import {ComptableListComponent} from "./view/comptables/comptable-list/comptable-list.component";
import {SocieteCreateComponent} from "./view/societes/societe-create/societe-create.component";
import {SocieteListComponent} from "./view/societes/societe-list/societe-list.component";
import {
  CategorieSocieteCreateComponent
} from "./view/categoriesocietes/categoriesociete-create/categoriesociete-create.component";
import {
  CategoriecomptableListComponent
} from "./view/categoriecomptables/categorieComptable-list/categoriecomptable-list.component";
import {
  CategorieComptableCreateComponent
} from "./view/categoriecomptables/categorieComptable-create/categorieComptable-create.component";
import {
  DemandeDeclarationCreateComponent
} from "./view/demandeDeclarations/demandeDeclaration-create/demandeDeclaration-create.component";
import {
  DemandeDeclarationListComponent
} from "./view/demandeDeclarations/demandeDeclaration-list/demandeDeclaration-list.component";
import {
  DemandeDeclarationDetaillesCreateComponent
} from "./view/demandeDeclarationsDetailles/demandeDeclarationDetailles-create/demandeDeclarationDetailles-create.component";
import {
  DemandeDeclarationDetaillesListComponent
} from "./view/demandeDeclarationsDetailles/demandeDeclarationDetailles-list/demandeDeclarationDetailles-list.component";
import {
  CategorieDeclarationCreateComponent
} from "./view/categoriedeclarations/categoriedeclaration-create/categoriedeclaration-create.component";
import {
  CategorieDeclarationListComponent
} from "./view/categoriedeclarations/categoriedeclaration-list/categoriedeclaration-list.component";
import {DeclarationIRCreateComponent} from "./view/declarationIRs/declarationIR-create/declarationIR-create.component";
import {DeclarationIRListComponent} from "./view/declarationIRs/declarationIR-list/declarationIR-list.component";
import {
  DeclarationIRdetaillesCreateComponent
} from "./view/declarationIRsdetailles/declarationIRdetailles-create/declarationIRdetailles-create.component";
import {
  DeclarationIRdetaillesListComponent
} from "./view/declarationIRsdetailles/declarationIRdetailles-list/declarationIRdetailles-list.component";
import {TauxIRCreateComponent} from "./view/tauxIRs/tauxIR-create/tauxIR-create.component";
import {TauxIRListComponent} from "./view/tauxIRs/tauxIR-list/tauxIR-list.component";
import {EmployeCreateComponent} from "./view/employes/employe-create/employe-create.component";
import {EmployeListComponent} from "./view/employes/employe-list/employe-list.component";
import {
  EtatDeclarationCreateComponent
} from "./view/etatDeclarations/etatDeclaration-create/etatDeclaration-create.component";
import {
  EtatDeclarationListComponent
} from "./view/etatDeclarations/etatDeclaration-list/etatDeclaration-list.component";
import {
  DeclarationFactureCreateComponent
} from "./view/declarationfactures/declarationfacture-create/declarationfacture-create.component";
import {
  DeclarationfactureListComponent
} from "./view/declarationfactures/declarationfacture-list/declarationfacture-list.component";
import {TypeFactureCreateComponent} from "./view/typeFactures/typeFacture-create/typeFacture-create.component";
import {TypeFactureListComponent} from "./view/typeFactures/typeFacture-list/typeFacture-list.component";
import {
  PaymentDeclarationCreateComponent
} from "./view/paymentDeclarations/paymentDeclaration-create/paymentDeclaration-create.component";
import {
  PaymentDeclarationListComponent
} from "./view/paymentDeclarations/paymentDeclaration-list/paymentDeclaration-list.component";
import {TypePaymentCreateComponent} from "./view/typePayments/typePayment-create/typePayment-create.component";
import {TypePaymentListComponent} from "./view/typePayments/typePayment-list/typePayment-list.component";
import {HomeComponent} from "./view/home/home.component";

export let indexLink = '';
const routes: Routes = [
  {path: indexLink, component:HomeComponent},
  {path: 'societe-create', component:SocieteCreateComponent},
  {path: 'societe-list', component:SocieteListComponent} ,
  {path: 'categorieSociete-create', component:CategorieSocieteCreateComponent},
  {path: 'comptable-list', component:CategoriecomptableListComponent},
  {path: 'comptable-create', component:ComptableCreateComponent},
  {path: 'comptable-list', component:ComptableListComponent},
  {path: 'categorieComptable-create', component:CategorieComptableCreateComponent},
  {path: 'categorieComptable-list', component:CategoriecomptableListComponent},
  {path: 'categorieComptable-create', component:CategorieComptableCreateComponent},
  {path: 'categorieComptable-list', component:CategoriecomptableListComponent},
  {path: 'demandeDeclaration-create', component:DemandeDeclarationCreateComponent},
  {path: 'demandeDeclaration-list', component:DemandeDeclarationListComponent},
  {path: 'demandeDeclarationDetailles-create', component:DemandeDeclarationDetaillesCreateComponent},
  {path: 'demandeDeclarationDetailles-list', component:DemandeDeclarationDetaillesListComponent},
  {path: 'categorieDeclaration-create', component:CategorieDeclarationCreateComponent},
  {path: 'categorieDeclaration-list', component:CategorieDeclarationListComponent},
  {path: 'declarationIR-create', component:DeclarationIRCreateComponent},
  {path: 'declarationIR-list', component:DeclarationIRListComponent},
  {path: 'declarationIRdetailles-create', component:DeclarationIRdetaillesCreateComponent},
  {path: 'declarationIRdetailles-list', component:DeclarationIRdetaillesListComponent},
  {path: 'tauxIR-create', component:TauxIRCreateComponent},
  {path: 'tauxIR-list', component:TauxIRListComponent},
  {path: 'employe-create', component:EmployeCreateComponent},
  {path: 'employe-list', component:EmployeListComponent},
  {path: 'etatDeclaration-create', component:EtatDeclarationCreateComponent},
  {path: 'etatDeclaration-list', component:EtatDeclarationListComponent},
  {path: 'declarationFacture-create', component:DeclarationFactureCreateComponent},
  {path: 'declarationFacture-list', component:DeclarationfactureListComponent},
  {path: 'typeFacture-create', component:TypeFactureCreateComponent},
  {path: 'typeFacture-list', component:TypeFactureListComponent},
  {path: 'paymentDeclaration-create', component:PaymentDeclarationCreateComponent},
  {path: 'paymentDeclaration-list', component:PaymentDeclarationListComponent},
  {path: 'typePayment-create', component:TypePaymentCreateComponent},
  {path: 'typePayment-list', component:TypePaymentListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
