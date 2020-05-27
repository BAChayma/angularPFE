import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contribuable } from '../classes/Contribuable';
import { ScontribuableService } from '../WSservices/scontribuable.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {parseHttpResponse} from 'selenium-webdriver/http';
import { CompteBancaire } from '../classes/ComteBancaire';
import { Adresse } from '../classes/Adresse';

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

  //cb: CompteBancaire[];
  CompteBancaire: any[];
  cbs: CompteBancaire[];

    nif: string;
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

  constructor(private contribuableService: ScontribuableService , private router: Router ,  private http: HttpClient) { }

  ngOnInit() {
    }

    list(){
      this.contribuableService.getAllContribuable().subscribe(
      (res) => {
        this.contribuables = res;
        console.log(res);
        console.log(this.contribuables);
      },
      err => console.error(err) ,
      () => console.log('getAllContribuable completed') 
      )
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

    editcb(kcompte){
      this.router.navigate(['updateCb',kcompte]);
    };

    editAdr(kadresse){
      this.router.navigate(['updateAdr',kadresse]);
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
    

  }

  
