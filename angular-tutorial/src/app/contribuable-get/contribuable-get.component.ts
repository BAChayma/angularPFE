import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contribuable } from '../classes/Contribuable';
import { ScontribuableService } from '../WSservices/scontribuable.service';
import { Router, ActivatedRoute} from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import {parseHttpResponse} from 'selenium-webdriver/http';
import { CompteBancaire } from '../classes/ComteBancaire';
import { Adresse } from '../classes/Adresse';
import { SdeclarationService } from '../WSservices/sdeclaration.service';


@Component({
  selector: 'app-contribuable-get',
  templateUrl: './contribuable-get.component.html',
  styleUrls: ['./contribuable-get.component.css']
})
export class ContribuableGetComponent implements OnInit {
  contribuables: any;
  //c: Contribuable[];

  //adr: Adresse[];
  Adresse: any[];
  adresses: Adresse[];
  adr: Adresse;

  //cb: CompteBancaire[];
  CompteBancaire: any[];
  cbs: CompteBancaire[];

  Declaration: any[];

  contribuableImpot: any;

    nif: string;
    id: number;
    capitalSociale = {};
    dateDebExp = {};
    libelleae = {};
    libelleagence = {};
    libellefj = {};
    nationnalite = {};
    nomCommerciale = {}; 
    nombanque = {};
    raisonSociale = {};
    registreCommerce = {};
    rib = {};

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  sub: any;
  c: Contribuable;

  constructor(private cdeclarationService: SdeclarationService ,private contribuableService: ScontribuableService , private router: Router ,  private http: HttpClient , private route: ActivatedRoute) 
  { 

  }

  ngOnInit() {

    this.c = new Contribuable();

    //this.nif = this.route.snapshot.queryParams["nif"];
    //this.nif = this.route.snapshot.params['nif'];
    //this.nif = this.route.parent.params['nif'];
    //this.nif = this.route.snapshot.paramMap.get('nif');
    //this.nif = this.route.snapshot.parent.paramMap.get('nif');
    //console.log(this.nif);
    //this.recherche(this.nif);

    }

    RechercheContri(nif)  
      {
        this.contribuableService.RechercheContribuable(this.nif).subscribe(
          (data) => { 
            this.contribuables = data;
            this.contribuables = Array.of(this.contribuables); 
            console.log(this.contribuables);
           },
          err => console.error(err), 
          () => console.log('getContribuableById completed') 
          )
          this.recherche1(this.nif);
          this.recherche2(this.nif);
          this.recherche3(this.nif);
          return this.contribuables;
     }

    recherche(nif)  
      {
        this.contribuableService.getContribuableById1(this.nif).subscribe(
          (data) => { 
            this.contribuables = data;
            this.contribuables = Array.of(this.contribuables); 
            console.log(this.contribuables);
           },
          err => console.error(err), 
          () => console.log('getContribuableById completed') 
          )
          this.recherche1(this.nif);
          this.recherche2(this.nif);
          this.recherche3(this.nif);
          this.ListObligationFiscale(this.nif);
          return this.contribuables;
     }

     recherche1(nif)  
      {
        this.contribuableService.AdrContriByNif(this.nif).subscribe(
          (data) => { 
            this.Adresse = data;
            this.Adresse = Array.of(this.Adresse); 
            console.log(this.Adresse);
           },
          err => console.error(err), 
          () => console.log('AdrContriByNif completed') 
          )
          return this.Adresse;
     }

     recherche2(nif)  
      {
        this.contribuableService.CbContriByNif(this.nif).subscribe(
          (data) => { 
            this.CompteBancaire = data;
            this.CompteBancaire = Array.of(this.CompteBancaire); 
            console.log(this.CompteBancaire);
           },
          err => console.error(err), 
          () => console.log('CbContriByNif completed') 
          )
          return this.CompteBancaire;
     }

     recherche3(nif)  
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

    recherche4(nif)  
     {
       this.contribuableService.ImpotContriByNif(this.nif).subscribe(
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

    ListObligationFiscale(nif)
    {
      this.cdeclarationService.LOVImpotContri1(nif).subscribe(
        (data) => { 
          this.contribuableImpot = data;
          this.contribuableImpot = Array.of(this.contribuableImpot); 
          console.log(this.contribuableImpot);
         },
        err => console.error(err), 
        () => console.log('LOVImpotContri completed') 
        )
        return this.contribuableImpot;
    }

     /*update(nif) {
      this.router.navigate(['contribuableUpdate' , nif]);
    }
    
    update(contribuables) {
      this.router.navigate(['updateContribuable' , contribuables]);
    }*/

    editcontribuables(contribuables: Contribuable): void {
      this.router.navigate(['updateContribuable']);
    };

    /*editcb(contribuables: Contribuable): void {
      this.router.navigate(['updateCb']);
    };*/

    editcb(kcompte: number){
      this.router.navigate(['updateCb', kcompte]);
    };

    editAdr(kadresse: number){
      this.router.navigate(['updateAdr', kadresse]);
    };
      
    ajoutercb() {
      this.router.navigate(['newCB']);
    }
    
    ajouteradr() {
      this.router.navigate(['newADR']);
    }

    deleteADR(adr: Adresse): void {
      this.contribuableService.supprimeradr(adr.kadresse)
        .subscribe( data => {
          this.adresses = this.adresses.filter(u => u !== adr);
        })
      };

      deletecb(cb: CompteBancaire): void {
        this.contribuableService.supprimercb(cb.kcompte)
          .subscribe( data => {
            this.cbs = this.cbs.filter(u => u !== cb);
          })
        };
    
        ajouterdcl() {
          this.router.navigate(['newDCL']);
        }

  }

  
