import { Component, OnInit, Inject } from '@angular/core';
import { SdeclarationService } from '../WSservices/sdeclaration.service';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Impot } from '../classes/Impot';
import { Observable } from 'rxjs/internal/Observable';
import { ImpotDetail } from '../classes/ImpotDetail';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ParametrageNewLigneComponent } from './parametrage-newLigne/parametrage-newLigne.component';
import { ParametrageNewColonneComponent } from './parametrage-new-colonne/parametrage-new-colonne.component';
import { detailLigne } from '../classes/detailLigne';
import { detailColonne } from '../classes/detailColonne';
import { Router } from '@angular/router';
import { SDetLigneService } from '../WSservices/sdet-ligne.service';
import { SDetColonneService } from '../WSservices/sdet-colonne.service';
import { detailColonneDet } from '../classes/detailColonneDet';
import { detailLigneDet } from '../classes/detailLigneDet';
import { ScelluleService } from '../WSservices/scellule.service';
import { ParametrageNewFormuleComponent } from './parametrage-new-formule/parametrage-new-formule.component';
import { SformuleService } from '../WSservices/sformule.service';

@Component({
  selector: 'app-parametrage-impot',
  templateUrl: './parametrage-impot.component.html',
  styleUrls: ['./parametrage-impot.component.css']
})
export class ParametrageImpotComponent implements OnInit {

  /*impotItems : any[];
  impot: any[];*/
  selectedImpotId: any;
  impotItems : ImpotDetail[];
  impot : Impot[];

  detLig: detailLigne[];
  detCol: detailColonne[];

  DetailLigne: any;
  DetailColonne: any;

  selectedDetColId: any;
  detColItems : detailColonneDet[];
  colonne : detailColonne[];

  selectedDetLigId: any;
  detLigItems : detailLigneDet[];
  ligne : detailLigne[];

  Formule: any;

  selectedRow;
  LForm: FormGroup;

  constructor(private formuleService:SformuleService, private celService: ScelluleService, private detcolService: SDetColonneService , private detligService: SDetLigneService , private router: Router , private declaration: SdeclarationService , private formBuilder: FormBuilder , public dialog: MatDialog ) {
    
   }

  ngOnInit(): void {
    this.LForm = this.formBuilder.group({
      KCellule: [null, Validators.required],
      detCellule: [null, Validators.required],
      ordreCellule: [null, Validators.required],
      //detligName: [null, Validators.required],
      //detcolName: [null, Validators.required]
      KDetColonne: [null, Validators.required],
      KDetLigne: [null, Validators.required]
    });

    this.getImpot();
    this.lov();
  }

  lov(){
    this.getDetColByImpot();
    this.getDetLigtByImpot();
    this.listDetColByImpot();
    this.listDetLigByImpot();
    this.listFormule();
    /*this.getDetCol();
    this.getDetLig();*/
  }

  getImpot(){
    this.declaration.LOVImpotDupp().subscribe(data => {  
      this.impotItems = data.impot;
      console.log(data);
      console.log(this.impotItems); 
  });
  }

  onRowClicked(row){
    this.selectedRow = row;
  }

  getDetColByImpot(){
    this.detcolService.LOVColByImpot(this.selectedImpotId).subscribe(data => {  
      this.detColItems = data.detailColonne;
      console.log(data);
      console.log(this.detColItems); 
  });
  }

  getDetLigtByImpot(){ 
    this.detligService.LOVLigneByImpot(this.selectedImpotId).subscribe(data => {  
      this.detLigItems = data.detailLigne;
      console.log(data);
      console.log(this.detLigItems); 
  });
  }

  listDetColByImpot(){
    this.detcolService.getAllDetColByImpot(this.selectedImpotId).subscribe(
    (data) => {
      this.DetailColonne = data;
      this.DetailColonne = Array.of(this.DetailColonne); 
      console.log(this.DetailColonne);
    },
    err => console.error(err) ,
    () => console.log('listDetColByImpot completed') 
    )
    return this.DetailColonne;
  }

  listDetLigByImpot(){
    this.detligService.getAllDetLigByImpot(this.selectedImpotId).subscribe(
    (data) => {
      this.DetailLigne = data;
      this.DetailLigne = Array.of(this.DetailLigne); 
      console.log(this.DetailLigne);
    },
    err => console.error(err) ,
    () => console.log('getAllDetLig completed') 
    )
    return this.DetailLigne;
  }

  listFormule(){
    //this.formuleService.FormuleByImpot(this.selectedImpotId).subscribe(
    this.formuleService.CalculFormuleByImpot(this.selectedImpotId).subscribe(
    (data) => {
      this.Formule = data;
      this.Formule = Array.of(this.Formule); 
      console.log(this.Formule);
    },
    err => console.error(err) ,
    () => console.log('FormuleByImpot') 
    )
    return this.Formule;
  }

  /*getDetCol(){
    this.detcolService.LOVCol().subscribe(data => {  
      this.detColItems = data.detailColonne;
      console.log(data);
      console.log(this.detColItems); 
      console.log("LOVCol");
  });
  }

  getDetLig(){ 
    this.detligService.LOVLigne().subscribe(data => {  
      this.detLigItems = data.detailLigne;
      console.log(data);
      console.log(this.detLigItems); 
      console.log("LOVLigne");
  });
  }

  listDetCol(){
    this.detcolService.getAllDetCol().subscribe(
    (data) => {
      this.DetailColonne = data;
      this.DetailColonne = Array.of(this.DetailColonne); 
      console.log(this.DetailColonne);
    },
    err => console.error(err) ,
    () => console.log('getAllDetCol completed') 
    )
    return this.DetailColonne;
  }

  listDetLig(){
    this.detligService.getAllDetLig().subscribe(
    (data) => {
      this.DetailLigne = data;
      this.DetailLigne = Array.of(this.DetailLigne); 
      console.log(this.DetailLigne);
    },
    err => console.error(err) ,
    () => console.log('getAllDetLig completed') 
    )
    return this.DetailLigne;
  }*/

  onSubmitCellule() {
    this.celService.AjouterCel(this.LForm.value)
    .subscribe(res => {
      console.log(res);
      console.log(this.LForm.value);
    }, (err) => {
      console.log(err);
    });
  }

  openDialogLigne() {
    /*const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    dialogConfig.data = this.selectedImpotId;
    this.dialog.open(ParametrageNewLigneComponent,dialogConfig);
    localStorage.setItem('selectedImpotId', this.selectedImpotId);*/
    
    const dialogConfig = this.dialog.open(ParametrageNewLigneComponent, {
    width: '800px',
    data: {
      selectedImpotId : this.selectedImpotId
    }
    });
  }

  openDialogColonne() {
    /*const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(ParametrageNewColonneComponent,dialogConfig);*/

    const dialogConfig = this.dialog.open(ParametrageNewColonneComponent, {
      width: '800px',
      data: {
        selectedImpotId : this.selectedImpotId
      }
      });
  }

  openDialogFormule(){
    /*const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(ParametrageNewFormuleComponent,dialogConfig);*/

    const dialogConfig = this.dialog.open(ParametrageNewFormuleComponent, {
      width: '800px',
      data: {
        selectedImpotId : this.selectedImpotId
      }
      });
  }
  

}
