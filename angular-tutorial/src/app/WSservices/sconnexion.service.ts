import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ContribuableUser } from '../classes/ContribuableUser';
import { stringify } from 'querystring';
import { Utilisateur } from '../classes/Utilisateur';

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

  private status = false;

  username: string;
  mdp: string;
  public SERVER_URL = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/UtilisateurWS/login';
  public url_cnx = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/UtilisateurWS/connexion?mdp=test&username=test';
  public cnxURL = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/UtilisateurWS/connexion';
  
  /*login(username: string, password: string) {
    return this.httpClient.post<any>(this.cnxURL, { username, password })
  }*/

  login(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post<any>('http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/UtilisateurWS/connexion', body.toString(), httpOptions);
  }

  private handleLoginError(error: HttpErrorResponse) {
    return throwError(error.statusText || 'There\'s something wrong with our servers.');
  }

  getConnexion(username , mdp) :Observable<Utilisateur> 
  {
  //this.loggedIn.next();
   // this.menu.next(true);
    //return this.httpClient.post<any>(`${this.SERVER_URL}?mdp=${mdp}&username=${username}` , this.httpOptions ); 
    //return this.httpClient.post<any>(this.url_cnx , this.httpOptions);
    //return this.httpClient.post<any>(this.cnxURL, { username, mdp })
    return this.httpClient.post<Utilisateur>(`${this.cnxURL}?mdp=${mdp}&username=${username}` , this.httpOptions ); 
  }

  

  public loggedIn = new Subject<boolean>(); // {1}

  sendLoggedIn(loggedIn: boolean){
    this.loggedIn.next(loggedIn);
  }
  getLoggedIn():Observable<boolean>{
    return this.loggedIn.asObservable();
  }
  private menu = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  get ismenu() {
    return this.loggedIn.asObservable(); // {2}
  }

  voirMenu(){
    this.status = true;
  }
  
  /*isUserLoggedIn(){
  
    if (this.getConnexion(this.username , this.mdp))
    this.status = true;
    else this.status = false;
    
  }*/

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['connexion']);
  }

  /*
    Liste des contribuable pour un user 
  */
ListUserContriUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/ContribuableUserWS/ListContribuablePourUser/';
ListUserContri(){
  return this.httpClient.get<ContribuableUser[]>(this.ListUserContriUrl , this.httpOptions );
}

}
