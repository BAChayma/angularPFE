import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SconnexionService } from '../WSservices/sconnexion.service';
import { AuthService } from '../WSservices/auth.service';
import { TokenStorageService } from '../WSservices/token-storage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  /*form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        //this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
*/
   
  
  Form: FormGroup;
  constructor(private formBuilder: FormBuilder ,private cnxService: SconnexionService ,  private http: HttpClient , private router: Router , private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      username: [null, Validators.required],
      mdp: [null, Validators.required]
    });
  }

  utilisateurs: any;
  username: string;
  mdp: string;
  testLogIn =  false;
  loading = false;

  // /* login() {
  //   this.cnxService.getConnexion(this.username , this.mdp) 
  //   .subscribe(
  //     (res) => {
  //       this.utilisateurs = res;
  //       console.log(res);
  //       console.log(this.utilisateurs);
  //     },
  //     err => console.error(err) ,
  //     () => {
  //       console.log('connexion...') 
  //     }
  //     )
  //     this.gotoList();
  //     return this.utilisateurs;
  // }
 
  login() {
    this.cnxService.getConnexion(this.username , this.mdp) 
      .subscribe(
         (res) => {
           this.utilisateurs = res;
         })
    return this.utilisateurs;
  }


  onSubmit() {
    //this.login();
    this.testLogIn = true;
    if (this.Form.invalid) {
      return;
    }
    this.loading = true;
    this.cnxService.getConnexion(this.username, this.mdp)
            .subscribe(
                data => {
                  this.router.navigate(['Accueil']);
                },
                error => {
                    this.loading = false;
                });

  }

  gotoList() {
    //alert('Connected successfully.');
    this.router.navigate(['Accueil']);
  }

  gotoCnx() {
    //alert('Username or password wrong!.');
    this.router.navigate(['connexion']);
  }



}
