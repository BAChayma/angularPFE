import { Component, OnInit } from '@angular/core';
import { SconnexionService } from '../WSservices/sconnexion.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Contribuable } from '../classes/Contribuable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  c: Contribuable;
  nif: string;

  isCollapsed: boolean = true;
  username: string;
  mdp: string;

  isLoggedIn$: Observable<boolean>;

  ContribuableUser: any;

  sub: any;
  parentRouteId: number;

  constructor(public loginService:SconnexionService ,  private router: Router, private http: HttpClient , private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.c = new Contribuable();
    this.nif = this.route.snapshot.params['nif'];
    console.log(this.nif);

    this.isLoggedIn$ = this.loginService.isLoggedIn;
    this.list();
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


}
