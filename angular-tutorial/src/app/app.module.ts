import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ContribuableGetComponent } from './contribuable-get/contribuable-get.component';
import { FormsModule } from '@angular/forms';
import { ContribuableUpdateComponent } from './contribuable-get/contribuable-update/contribuable-update.component';

import { AngularSplitModule } from 'angular-split';
import { CbUpdateComponent } from './contribuable-get/cb-update/cb-update.component';
import { AdministrationComponent } from './administration/administration.component';
import { FormejuridiqueGetComponent } from './administration/formejuridique-get/formejuridique-get.component';
import { ActiviteEseGetComponent } from './administration/activite-ese-get/activite-ese-get.component';
import { ImpotGetComponent } from './administration/impot-get/impot-get.component';
import { PaysGetComponent } from './administration/pays-get/pays-get.component';
import { ModePaiementGetComponent } from './administration/mode-paiement-get/mode-paiement-get.component';
import { ActiviteEseUpdateComponent } from './administration/activite-ese-get/activite-ese-update/activite-ese-update.component';
import { ActiviteEseNewComponent } from './administration/activite-ese-get/activite-ese-new/activite-ese-new.component';
import { FormejuridiqueNewComponent } from './administration/formejuridique-get/formejuridique-new/formejuridique-new.component';
import { FormejuridiqueUpdateComponent } from './administration/formejuridique-get/formejuridique-update/formejuridique-update.component';
import { AdresseUpdateComponent } from './contribuable-get/adresse-update/adresse-update.component';
import { AdresseNewComponent } from './contribuable-get/adresse-new/adresse-new.component';
import { CbNewComponent } from './contribuable-get/cb-new/cb-new.component';
import { DeclarationGetComponent } from './declaration-get/declaration-get.component';


@NgModule({
  declarations: [
    AppComponent,
    ContribuableGetComponent,
    InscriptionComponent,
    ConnexionComponent,
    ContribuableUpdateComponent,
    CbUpdateComponent,
    AdministrationComponent,
    FormejuridiqueGetComponent,
    ActiviteEseGetComponent,
    ImpotGetComponent,
    PaysGetComponent,
    ModePaiementGetComponent,
    ActiviteEseUpdateComponent,
    ActiviteEseNewComponent,
    FormejuridiqueNewComponent,
    FormejuridiqueUpdateComponent,
    AdresseUpdateComponent,
    AdresseNewComponent,
    CbNewComponent,
    DeclarationGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularSplitModule.forRoot(),
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
