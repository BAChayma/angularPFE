import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SdeclarationService } from '../WSservices/sdeclaration.service';
import { Declaration } from '../classes/Declaration';
import { Contribuable } from '../classes/Contribuable';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { contribuableImpot } from '../classes/contribuableImpot';
import { SdataService } from '../WSservices/sdata.service';
import { ImpotDetail } from '../classes/ImpotDetail';
import { Impot } from '../classes/Impot';
import { contribuableImpotDetail } from '../classes/contribuableImpotDetail';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeclarationNewComponent } from './declaration-new/declaration-new.component';
import { PeriodiciteDet } from '../classes/PeriodiciteDet';
import { Periodicite } from '../classes/Periodicite';
import { datailPeriodiciteDet } from '../classes/datailPeriodiciteDet';
import { datailPeriodicite } from '../classes/datailPeriodicite';

@Component({
  selector: 'app-declaration-get',
  templateUrl: './declaration-get.component.html',
  styleUrls: ['./declaration-get.component.css']
})
export class DeclarationGetComponent implements OnInit {

  contribuables: any;
  nif: string;
  Declaration: any[];
  Declarations: any[];

  selectedImpotId: any;
  impotItems : contribuableImpotDetail[];
  contribuableImpot : contribuableImpot[];

  selectedPeriodId: any;
  periodItems : PeriodiciteDet[];
  periodicite : Periodicite[];
  perItems = [];

  selectedDetPeriodId: any;
  detperiodItems : datailPeriodiciteDet[];
  detPer : datailPeriodicite[];

  addForm: FormGroup;
  addForm1: FormGroup;

  
  //dcl: Declaration;
  //Declaration: any[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public dataService:SdataService, public dialog: MatDialog, private formBuilder: FormBuilder ,private cdeclarationService: SdeclarationService , private router: Router ,  private http: HttpClient , private route: ActivatedRoute) 
  {
    
  }

  c: Contribuable;
  ngOnInit(): void {
    
    this.c = new Contribuable();

    this.nif = this.dataService.getsharedNif();  
    console.log(this.nif);
    this.rechercheContri(this.nif);

    /*this.nif = this.route.snapshot.params['nif'];
    this.rechercheContri(this.nif);*/

    this.addForm = this.formBuilder.group({
      impotContriName: ['', Validators.required],
      per: ['', Validators.required],
      moisEx: ['', Validators.required],
      echDec: ['', Validators.required]
    });

    this.addForm1 = this.formBuilder.group({
      md: ['', Validators.required],
      mv: ['', Validators.required],
      rp: ['', Validators.required]
    });

    this.ListObligationFiscale();
    this.getPeriodiciteByImpot();
    this.getDetPeriodiciteByPer();
    this.disabledInput();

  }


  getPeriodiciteByImpot(){
    /*this.cdeclarationService.LOVPeriodicite(this.selectedImpotId).subscribe(data => {  
      console.log(this.selectedImpotId);
      this.periodItems = data.periodicite;
      console.log(data);
      console.log(this.periodItems); 
    });*/
  this.cdeclarationService.LOVPeriodicite(this.selectedImpotId).subscribe(data => {  
    console.log(this.selectedImpotId);
    this.perItems = data;
    this.perItems = Array.of(this.perItems); 
    console.log(data);
    console.log(this.perItems);

    this.getDetPeriodiciteByPer();
  });
  }

  getDetPeriodiciteByPer(){
    this.cdeclarationService.LOVDetailPeriodicite(this.selectedPeriodId).subscribe(data => {  
      console.log(this.selectedPeriodId);
      this.detperiodItems = data.datailPeriodicite;
      console.log(data);
      console.log(this.detperiodItems); 
  });
  }
  

  /*getImpot(){
    this.cdeclarationService.LOVImpotDupp().subscribe(data => {  
      this.impotItems = data.impot;
      console.log(data);
      console.log(this.impotItems); 
  });
  }*/

  /* impot par coontribuable */
  ListObligationFiscale()
    {
      this.cdeclarationService.LOVImpotContri1(this.nif).subscribe(
        (data) => { 
          this.impotItems = data.contribuableImpot;
          console.log(data);
          console.log(this.impotItems); 
         },
        err => console.error(err), 
        () => console.log('LOVImpotContri completed') 
        )
        return this.impotItems;
    }
  /* fin */
 

  rechercheContri(nif)  
      {
        this.cdeclarationService.getContribuableById1(this.nif).subscribe(
          (data) => { 
            this.contribuables = data;
            this.contribuables = Array.of(this.contribuables); 
            console.log(this.contribuables);
           },
          err => console.error(err), 
          () => console.log('getContribuableById completed') 
          )
          this.recherche1(this.nif);
          return this.contribuables;
     }

     recherche1(nif)  
     {
       this.cdeclarationService.DclContriByNif(this.nif).subscribe(
         (data) => { 
           this.Declaration = data;
           this.Declaration = Array.of(this.Declaration); 
           console.log(this.Declaration);
          },
         err => console.error(err), 
         () => console.log('DclContriByNif completed') 
         )
         return this.Declaration;
    }

    ajouterdcl() {
      this.router.navigate(['newDCL']);
    }

      onSubmit() {
      }

      onSubmit1() {
      }

      disabledInput(){
        let impotContriName = this.addForm.get('impotContriName');
        let per = this.addForm.get('per');
        let moisEx = this.addForm.get('moisEx');
        let echDec = this.addForm.get('echDec');

        impotContriName.disable();
        per.disable();
        moisEx.disable();
        echDec.disable();

        let md = this.addForm1.get('md');
        let mv = this.addForm1.get('mv');
        let rp = this.addForm1.get('rp');

        md.disable();
        mv.disable();
        rp.disable();
      }

      enableInput(){
        let impotContriName = this.addForm.get('impotContriName');
        let per = this.addForm.get('per');
        let moisEx = this.addForm.get('moisEx');
        let echDec = this.addForm.get('echDec');

        impotContriName.enable();
        per.enable();
        moisEx.enable();
        echDec.enable();

        let md = this.addForm1.get('md');
        let mv = this.addForm1.get('mv');
        let rp = this.addForm1.get('rp');

        md.enable();
        mv.enable();
        rp.enable();
      }

      openDialogDcl() {
        /*const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        this.dialog.open(ParametrageNewColonneComponent,dialogConfig);*/
    
        const dialogConfig = this.dialog.open(DeclarationNewComponent, {
          width: '800px',
          data: {
            selectedImpotId : this.selectedImpotId
          }
          });
      }

}
