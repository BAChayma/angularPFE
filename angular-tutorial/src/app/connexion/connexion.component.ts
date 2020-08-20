import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { SconnexionService } from '../WSservices/sconnexion.service';
import { AuthService } from '../WSservices/auth.service';
import { TokenStorageService } from '../WSservices/token-storage.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

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
  testLogIn =  false;
  loading = false;


  password: string;

  isError: boolean;
  error: string;

  /*login() {
    this.cnxService.getConnexion(this.username , this.mdp) 
      .subscribe(
         (res) => {
           this.utilisateurs = res;
         })
    return this.utilisateurs;
  }*/

  onSubmit() {
    if (this.Form.invalid) {
      return;
    }
    this.cnxService.getConnexion(this.username, this.password)
            .subscribe(
                data => {
                  this.loading = true;
                  this.cnxService.sendLoggedIn(true);
                  this.router.navigate(['Accueil']);
                },
                error => {
                    this.loading = false;
                    this.cnxService.sendLoggedIn(false);
                },
                () => console.log('connexion completed') 
                );

                /*if (! this.username || ! this.password) {
                  this.isError = true;
                  if (!this.username && ! this.password) {
                    this.error = 'Enter a username and password.';
                  } else if (!this.username) {
                    this.error = 'Enter a username.';
                  } else {
                    this.error = 'Enter a password.';
                  }
                  return;
                }
                this.cnxService.login(this.username, this.password)
                  .subscribe(
                    _ => {
                      this.isError = false;
                      this.error = '';
                      this.testLogIn = true;
                    },
                    error => {
                      this.isError = true;
                      this.error = error;
                    }
                  );*/
  }

  gotoList() {
    this.router.navigate(['Accueil']);
  }

  gotoCnx() {
    this.router.navigate(['connexion']);
  }



}
