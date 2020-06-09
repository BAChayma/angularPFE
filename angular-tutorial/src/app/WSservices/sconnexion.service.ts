import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ContribuableUser } from '../classes/ContribuableUser';

export class User {
  constructor(
    public status: string,
  ) { }

}


@Injectable({
  providedIn: 'root'
})
export class SconnexionService {

  constructor(private httpClient: HttpClient , private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  username: string;
  mdp: string;
  public SERVER_URL = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/UtilisateurWS/connexion';
  
  getConnexion(username , mdp) :Observable<any> 
  {
    return this.httpClient.get<any>(`${this.SERVER_URL}?mdp=${mdp}&username=${username}` , this.httpOptions ); 
  }

  isUserLoggedIn(){
    if (this.getConnexion(this.username,this.mdp)) return true;
    return false;
  }

  logout() {
    this.router.navigate(['connexion']);
  }

  /*
    Liste des contribuable pour un user 
  */
ListUserContriUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/ContribuableUserWS/ListContribuablePourUser';
ListUserContri(){
  return this.httpClient.get<ContribuableUser[]>(this.ListUserContriUrl , this.httpOptions );
}

}
