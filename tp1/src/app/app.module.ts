import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieComptableCreateComponent } from './view/categoriecomptables/categorieComptable-create/categorieComptable-create.component';
import { CategoriecomptableListComponent } from './view/categoriecomptables/categorieComptable-list/categoriecomptable-list.component';
import { CategorieDeclarationCreateComponent } from './view/categoriedeclarations/categoriedeclaration-create/categoriedeclaration-create.component';
import { CategorieDeclarationListComponent } from './view/categoriedeclarations/categoriedeclaration-list/categoriedeclaration-list.component';
import { CategorieSocieteCreateComponent } from './view/categoriesocietes/categoriesociete-create/categoriesociete-create.component';
import { CategoriesocieteListComponent } from './view/categoriesocietes/categoriesociete-list/categoriesociete-list.component';
import { DeclarationFactureCreateComponent } from './view/declarationfactures/declarationfacture-create/declarationfacture-create.component';
import { DeclarationfactureListComponent } from './view/declarationfactures/declarationfacture-list/declarationfacture-list.component';
import { DeclarationIRCreateComponent } from './view/declarationIRs/declarationIR-create/declarationIR-create.component';
import { DeclarationIRListComponent } from './view/declarationIRs/declarationIR-list/declarationIR-list.component';
import { DeclarationIRdetaillesCreateComponent } from './view/declarationIRsdetailles/./declarationIRdetailles-create/declarationIRdetailles-create.component';
import { DeclarationIRdetaillesListComponent } from './view/declarationIRsdetailles/declarationIRdetailles-list/declarationIRdetailles-list.component';
import { DemandeDeclarationDetaillesCreateComponent} from './view/demandeDeclarationsDetailles/./demandeDeclarationDetailles-create/demandeDeclarationDetailles-create.component';
import { DemandeDeclarationDetaillesListComponent} from './view/demandeDeclarationsDetailles/demandeDeclarationDetailles-list/demandeDeclarationDetailles-list.component';
import { EmployeCreateComponent } from './view/employes/employe-create/employe-create.component';
import { EmployeListComponent } from './view/employes/employe-list/employe-list.component';
import { EtatDeclarationCreateComponent } from './view/etatDeclarations/./etatDeclaration-create/etatDeclaration-create.component';
import { EtatDeclarationListComponent } from './view/etatDeclarations/./etatDeclaration-list/etatDeclaration-list.component';
import { PaymentDeclarationCreateComponent } from './view/paymentDeclarations/paymentDeclaration-create/paymentDeclaration-create.component';
import { PaymentDeclarationListComponent } from './view/paymentDeclarations/paymentDeclaration-list/paymentDeclaration-list.component';
import { ComptableCreateComponent } from './view/comptables/comptable-create/comptable-create.component';
import { ComptableListComponent } from './view/comptables/comptable-list/comptable-list.component';
import { DemandeDeclarationCreateComponent } from './view/demandeDeclarations/demandeDeclaration-create/demandeDeclaration-create.component';
import { DemandeDeclarationListComponent } from './view/demandeDeclarations/demandeDeclaration-list/demandeDeclaration-list.component';
import { TypeFactureCreateComponent } from './view/typeFactures/typeFacture-create/typeFacture-create.component';
import { TypeFactureListComponent } from './view/typeFactures/typeFacture-list/typeFacture-list.component';
import { TauxIRCreateComponent } from './view/TauxIRs/TauxIR-create/TauxIR-create.component';
import { TauxIRListComponent } from './view/TauxIRs/TauxIR-list/TauxIR-list.component';
import { SocieteCreateComponent} from "./view/societes/societe-create/societe-create.component";
import { SocieteListComponent} from "./view/societes/societe-list/societe-list.component";
import { TypePaymentCreateComponent} from "./view/typePayments/typePayment-create/typePayment-create.component";
import { TypePaymentListComponent} from "./view/typePayments/typePayment-list/typePayment-list.component";
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    CategorieComptableCreateComponent,
    CategoriecomptableListComponent,
    CategorieDeclarationCreateComponent,
    CategorieDeclarationListComponent,
    CategorieSocieteCreateComponent,
    CategoriesocieteListComponent,
    DeclarationFactureCreateComponent,
    DeclarationfactureListComponent,
    DeclarationIRCreateComponent,
    DeclarationIRListComponent,
    DeclarationIRdetaillesCreateComponent,
    DeclarationIRdetaillesListComponent,
    DemandeDeclarationDetaillesCreateComponent,
    DemandeDeclarationDetaillesListComponent,
    EmployeCreateComponent,
    EmployeListComponent,
    EtatDeclarationCreateComponent,
    EtatDeclarationListComponent,
    PaymentDeclarationCreateComponent,
    PaymentDeclarationListComponent,
    SocieteCreateComponent,
    SocieteListComponent,
    TauxIRCreateComponent,
    TauxIRListComponent,
    ComptableCreateComponent,
    ComptableListComponent,
    DemandeDeclarationCreateComponent,
    DemandeDeclarationListComponent,
    TypeFactureCreateComponent,
    TypeFactureListComponent,
    TypePaymentCreateComponent,
    TypePaymentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
