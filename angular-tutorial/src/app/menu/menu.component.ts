import { Component, OnInit } from '@angular/core';
import { Contribuable } from '../classes/Contribuable';
import { ActivatedRoute, Router } from '@angular/router';
import { SconnexionService } from '../WSservices/sconnexion.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  c: Contribuable;
  nif: string;

  constructor(public loginService:SconnexionService ,  private router: Router, private http: HttpClient ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.c = new Contribuable();

    this.nif = this.route.snapshot.params['nif'];
    //this.nif = this.route.parent.params['nif'];

    console.log(this.nif);
  }

  ContribuableUser: any;

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
