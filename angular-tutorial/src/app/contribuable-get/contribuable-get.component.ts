import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contribuable } from '../classes/Contribuable';
import { ScontribuableService } from '../WSservices/scontribuable.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {parseHttpResponse} from 'selenium-webdriver/http';

@Component({
  selector: 'app-contribuable-get',
  templateUrl: './contribuable-get.component.html',
  styleUrls: ['./contribuable-get.component.css']
})
export class ContribuableGetComponent implements OnInit {
  contribuables: any;
  
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
    //this.recherche(this.nif);
    }

    list(){
      this.contribuableService.getAllContribuable().subscribe(
      (res) => {
        //this.contribuables = res.contribuables;
        this.contribuables = res;
      
        console.log(res);
        console.log(this.contribuables);
      },
      err => console.error(err) ,
      () => console.log('getAllContribuable completed') 
      )
      return this.contribuables;
    }

    recherche(nif) {
      this.contribuableService.getContribuableById1(nif).subscribe(
      (res) => {
        this.contribuables = res;
        this.contribuables = Array.of(this.contribuables); 
        //console.log(res);
        console.log(this.contribuables);
      },
      err => console.error(err) ,
      () => console.log('getContribuableById completed') 
      )
      return this.contribuables;
    }

    recherche1(nif)  
      {
        this.contribuableService.getContribuableById1(this.nif).subscribe(
          (data) => { 
            this.contribuables = data;
            this.contribuables = Array.of(this.contribuables); 
            console.log(this.contribuables);
           },
          err => console.error(err), 
          () => console.log('getContribuableById completed') 
          );
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

    

    

  }

  
