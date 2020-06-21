import { Component, OnInit } from '@angular/core';
import { SconnexionService } from '../WSservices/sconnexion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isCollapsed: boolean = true;
  username: string;
  mdp: string;

  isLoggedIn$: Observable<boolean>;

  constructor(public loginService:SconnexionService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
  }

  onLogout() {
    this.loginService.logout();
  }


}
