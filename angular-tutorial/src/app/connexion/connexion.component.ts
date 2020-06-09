import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SconnexionService } from '../WSservices/sconnexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

   
  Form: FormGroup;
  constructor(private formBuilder: FormBuilder ,private cnxService: SconnexionService ,  private http: HttpClient , private router: Router , private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  utilisateurs: any;
  username: string;
  mdp: string;

  login() {
    this.cnxService.getConnexion(this.username , this.mdp) 
    .subscribe(
      (res) => {
        this.utilisateurs = res;
        console.log(res);
        console.log(this.utilisateurs);
        //this.gotoList();
      },
      err => console.error(err) ,
      () => {
        console.log('connexion...') 
        //this.gotoCnx();
      }
      )
      this.gotoList();
      //this.gotoCnx();
      return this.utilisateurs;
  }

  onSubmit() {
    this.login();
  }

  gotoList() {
    alert('Connected successfully.');
    this.router.navigate(['Accueil']);
  }

  gotoCnx() {
    alert('Username or password wrong!.');
    this.router.navigate(['connexion']);
  }



}
