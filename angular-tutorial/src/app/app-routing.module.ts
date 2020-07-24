import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';

import { ContribuableGetComponent } from './contribuable-get/contribuable-get.component';
import {ContribuableUpdateComponent} from './contribuable-get/contribuable-update/contribuable-update.component';

import { CbUpdateComponent } from './contribuable-get/cb-update/cb-update.component';
import { CbNewComponent } from './contribuable-get/cb-new/cb-new.component';

import { AdresseUpdateComponent } from './contribuable-get/adresse-update/adresse-update.component';
import { AdresseNewComponent } from './contribuable-get/adresse-new/adresse-new.component';

import { AdministrationComponent } from './administration/administration.component';
import { ImpotGetComponent } from './administration/impot-get/impot-get.component';
import { PaysGetComponent } from './administration/pays-get/pays-get.component';
import { ModePaiementGetComponent } from './administration/mode-paiement-get/mode-paiement-get.component';
import { ParametrageImpotComponent } from './parametrage-impot/parametrage-impot.component';


import { ActiviteEseGetComponent } from './administration/activite-ese-get/activite-ese-get.component';
import { ActiviteEseUpdateComponent } from './administration/activite-ese-get/activite-ese-update/activite-ese-update.component';
import { ActiviteEseNewComponent } from './administration/activite-ese-get/activite-ese-new/activite-ese-new.component';

import { FormejuridiqueGetComponent } from './administration/formejuridique-get/formejuridique-get.component';
import { FormejuridiqueNewComponent } from './administration/formejuridique-get/formejuridique-new/formejuridique-new.component';
import { FormejuridiqueUpdateComponent } from './administration/formejuridique-get/formejuridique-update/formejuridique-update.component';

import { DeclarationGetComponent } from './declaration-get/declaration-get.component';
import { DeclarationNewComponent } from './declaration-get/declaration-new/declaration-new.component';

import { PaiementComponent } from './paiement/paiement.component';


const routes: Routes = [
  {path: '',   redirectTo: '/connexion', pathMatch: 'full' },
  {path: 'connexion', component: ConnexionComponent },
  {
    path: 'Accueil',
    //canActivate: [AuthGaurdService],
    component: AccueilComponent
},

  {path: 'contribuable', component: ContribuableGetComponent},
  {path: 'declaration', component: DeclarationGetComponent},
  {path: 'paiement', component: PaiementComponent},

  {path: 'inscription', component: InscriptionComponent},
  {path: 'updateContribuable', component: ContribuableUpdateComponent},
  {path: 'updateCb/:kcompte', component: CbUpdateComponent , data: [{isProd: true}]},
  {path: 'Administration', component: AdministrationComponent},
  {path: 'Formejuridique', component: FormejuridiqueGetComponent},
  {path: 'ActiviteEse', component: ActiviteEseGetComponent},
  {path: 'Impot', component: ImpotGetComponent},
  {path: 'Pays', component: PaysGetComponent},
  {path: 'ModePaiement', component: ModePaiementGetComponent},
  {path: 'updateAE/:kActEnt', component: ActiviteEseUpdateComponent},
  {path: 'newAE', component: ActiviteEseNewComponent},
  {path: 'updateAdr/:kadresse', component: AdresseUpdateComponent},
  {path: 'newFJ', component: FormejuridiqueNewComponent},
  {path: 'updateFJ/:kFormJuri', component: FormejuridiqueUpdateComponent},
  {path: 'newADR', component: AdresseNewComponent},
  {path: 'newCB', component: CbNewComponent},
  {path: 'newDCL', component: DeclarationNewComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'parametrageImpot', component: ParametrageImpotComponent},
  {path: 'header', component: HeaderComponent },

  {path: 'menu/:nif', component: MenuComponent,
  children: [
    { path: 'consulterContribuable', component: ContribuableGetComponent},
    { path: 'declarationContribuable', component: DeclarationGetComponent},
    { path: 'paiementContribuable', component: PaiementComponent}
  ]
  },

  {path: '', component: AccueilComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
