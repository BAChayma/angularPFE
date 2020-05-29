import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActiviteEntreprise } from '../classes/ActiviteEntreprise';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaeService {

  constructor(private http: HttpClient) { }

  ae: ActiviteEntreprise[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  public url_AE = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/ActiviteEntrepriseWS';

  getAE() 
  {return this.http.get<ActiviteEntreprise[]>(this.url_AE + '/ActEseAll/' ); }

  public url_getAEByID = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/ActiviteEntrepriseWS/getAEbyID';
  /*getAEByID(kActEnt) 
  {return this.http.get<ActiviteEntreprise[]>(this.url_AE + '/getAEbyID?kActEnt=' + kActEnt); }*/

  getAEByID(kActEnt: number): Observable<any> {
    return this.http.get<any>(`${this.url_getAEByID}?kActEnt=${kActEnt}`);
  }

  /*SupprimerAE(kActEnt : number) {
    return this.http.delete(this.url_AE  + kActEnt);
  }*/
  public deleteAEUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/ActiviteEntrepriseWS/deleteAEbyID?kActEnt=';
  SupprimerAE(kActEnt: number): Observable<ActiviteEntreprise> {
    return this.http.delete<ActiviteEntreprise>(this.deleteAEUrl + kActEnt);
  }

  AjouterAE( ae : ActiviteEntreprise): Observable<ActiviteEntreprise> {
    return this.http.post<ActiviteEntreprise>(this.url_AE + '/createActEse' , ae);
  }

  /*modifierAE(ae : ActiviteEntreprise): Observable<ActiviteEntreprise> {
    return this.http.put<ActiviteEntreprise>(this.url_AE+ '/updateActEse/' , ae);
  }*/

  /*modifierAE(ae : ActiviteEntreprise): Observable<ActiviteEntreprise> {
    return this.http.put<ActiviteEntreprise>(this.url_AE+ '/updateActEse/' , ae);
  }*/

  public url_UpdateAE = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/ActiviteEntrepriseWS/updateActEse?kActEnt=';
  /*modifierAE(KActEnt: number, value: any): Observable<Object> {
    return this.http.put(`${this.url_UpdateAE}/${KActEnt}`, value);
  }*/
  modifierAE(ae : ActiviteEntreprise) {
    return this.http.put(this.url_UpdateAE + ae.kActEnt, ae);
  }

}
