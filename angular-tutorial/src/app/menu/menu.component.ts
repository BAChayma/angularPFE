import { Component, OnInit } from '@angular/core';
import { Contribuable } from '../classes/Contribuable';
import { ActivatedRoute, Router } from '@angular/router';
import { SconnexionService } from '../WSservices/sconnexion.service';
import { HttpClient } from '@angular/common/http';
import { SdataService } from '../WSservices/sdata.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  c: Contribuable;
  nif: string;
  stockednif: string;

  isLoggedIn$: Observable<boolean>;

  constructor(public dataService:SdataService, public loginService:SconnexionService ,  private router: Router, private http: HttpClient ,private route: ActivatedRoute) 
  { 
    
  }

  ngOnInit(): void {
    this.c = new Contribuable();

    this.nif = this.route.snapshot.params['nif'];
    //this.nif = this.route.parent.params['nif'];

    //console.log(this.nif);

    //this.storeNif();

    //this.dataService.setsharedNif(this.storeNif());
    this.dataService.setsharedNif(this.nif);

    //localStorage.setItem('nif', 'nif');

    this.isLoggedIn$ = this.loginService.isLoggedIn;
    
  }

  ContribuableUser: any;

  storeNif(){
    this.stockednif = this.nif;
    console.log("stored nif:" + this.stockednif);
  }

  onLogout() {
    this.loginService.logout();
  }

  gotoConsulterContri(){
    this.router.navigate(['consulterContribuable'], {relativeTo: this.route} );
  }

  

  gotoConsulterDec()
  {
    this.router.navigate(['declarationContribuable'], {relativeTo: this.route} );
  }


}
