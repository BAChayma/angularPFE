import { Component, OnInit } from '@angular/core';
import { SconnexionService } from '../WSservices/sconnexion.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ContribuableUser } from '../classes/ContribuableUser';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  ContribuableUser: any;
  //Contribuableuser: ContribuableUser[];

  public edited = false;

  constructor(private cnxService: SconnexionService , private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.list();
  }

  /*
  `https://api.github.com/search/users?q=${this.input1.value}` 
  */

  list(){
    this.cnxService.ListUserContri().subscribe(
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

  nextPage(cu: ContribuableUser): void {
    this.router.navigate(['menu']);
  };

  isclicked(){
    return false; 
  }

}
