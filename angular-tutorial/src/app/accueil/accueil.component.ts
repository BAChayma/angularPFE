import { Component, OnInit } from '@angular/core';
import { SconnexionService } from '../WSservices/sconnexion.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  Contribuableuser: any;

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
      this.Contribuableuser = data;
      this.Contribuableuser = Array.of(this.Contribuableuser); 
      console.log(this.Contribuableuser);
    },
    err => console.error(err) ,
    () => console.log('ListUserContri completed') 
    )
    return this.Contribuableuser;
  }

}
