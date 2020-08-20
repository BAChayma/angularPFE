import { Component, OnInit } from '@angular/core';
import { SconnexionService } from '../WSservices/sconnexion.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Contribuable } from '../classes/Contribuable';
import { SdataService } from '../WSservices/sdata.service';
import { SmenuService } from '../WSservices/smenu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  c: Contribuable;
  nif: any;

  isCollapsed: boolean = true;
  username: string;
  mdp: string;

  isLoggedIn$: Observable<boolean>;
  ismenu$: Observable<boolean>;



  ContribuableUser: any;
  MenuDataP: any;
  MenuDataF: any;

  MenuData: any;
  SmenuData: any;
  Kmenu;

  sub: any;
  parentRouteId: number;

  public isMenuCollapsed = true;


  constructor(public menuService: SmenuService , public dataService:SdataService, public loginService:SconnexionService ,  private router: Router, private http: HttpClient , private route: ActivatedRoute) 
  {
    
  }

  ngOnInit(): void {

    this.c = new Contribuable();
    //this.nif = this.route.snapshot.params['nif'];
    //console.log(this.nif);

    this.nif = this.dataService.getsharedNif();  
    console.log(this.nif);

     
      this.isLoggedIn$ = this.loginService.getLoggedIn();


    this.ismenu$ = this.loginService.ismenu;

    this.list();
    //this.menuP();
    //this.menuF();
    this.menuList();
    this.smenuList();
  }

  list(){
    this.loginService.ListUserContri().subscribe(
    (data) => {
      this.ContribuableUser = data;
      this.ContribuableUser = Array.of(this.ContribuableUser); 
      console.log(this.ContribuableUser);
    },
    err => console.error(err) ,
    () => console.log('ListUserContri completed') 
    )
    return this.ContribuableUser;
  }

  /*menuList(){
    this.menuService.menu().subscribe(
    (data) => {
      this.MenuData = data;
      this.MenuData = Array.of(this.MenuData); 
      console.log(this.MenuDataP);
    },
    err => console.error(err) ,
    () => console.log('menu completed') 
    )
    return this.MenuData;
  }*/
  menuList(){
  this.menuService.menu().subscribe(data => {  
    this.MenuData = data.menuItem;
    this.MenuData = Array.of(this.MenuData); 
    console.log(data);
    console.log(this.MenuData);
  });
}

  smenuList(){
    this.menuService.smenu(this.Kmenu).subscribe(
    (data) => {
      this.SmenuData = data;
      this.SmenuData = Array.of(this.SmenuData); 
      console.log(this.SmenuData);
    },
    err => console.error(err) ,
    () => console.log('smenu completed') 
    )
    return this.SmenuData;
  }

  /*menuP(){
    this.menuService.menuP().subscribe(
    (data) => {
      this.MenuDataP = data;
      this.MenuDataP = Array.of(this.MenuDataP); 
      console.log(this.MenuDataP);
    },
    err => console.error(err) ,
    () => console.log('menuP completed') 
    )
    return this.MenuDataP;
  }

  menuF(){
    this.menuService.menuF().subscribe(
    (data) => {
      this.MenuDataF = data;
      this.MenuDataF = Array.of(this.MenuDataF); 
      console.log(this.MenuDataF);
    },
    err => console.error(err) ,
    () => console.log('menuF completed') 
    )
    return this.MenuDataF;
  }*/

  gotoConsulterContri1(){
    this.router.navigate(['consulterContribuable'], {relativeTo: this.route} );
  }

  gotoConsulterContri(nif){
    this.router.navigate(['menu',nif,'consulterContribuable'], {relativeTo: this.route} );
  }

  gotoConsulterDec()
  {
    this.router.navigate(['declarationContribuable'], {relativeTo: this.route} );
  }

  onLogout() {
    this.loginService.logout();
  }

  voirmenu() {
    this.loginService.voirMenu();
  }

  home() {
    this.router.navigate(['Accueil']);
    }

    


}
