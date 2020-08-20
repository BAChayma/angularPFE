import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { detailLigne } from '../classes/detailLigne';
import { Observable } from 'rxjs';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SDetLigneService {

  constructor(private http: HttpClient) { }

  detLig: detailLigne[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public AllDetLigUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailLigneWS/DetLigAll';
  getAllDetLig() 
  {return this.http.get<detailLigne[]>(this.AllDetLigUrl , this.httpOptions ); }

  public getAllDetLigByImpotUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailLigneWS/DetLigAllByImpot?kimpot=';
  getAllDetLigByImpot(kimpot: number) : Observable<any>
  {//return this.http.get<detailLigne[]>(this.getAllDetLigByImpotUrl + kimpot ); 
    return this.http.get<any>(this.getAllDetLigByImpotUrl+kimpot)}
  
  /*LOVLigneByImpotUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailLigneWS/LOVDetLigByImpot?kimpot=';
  LOVLigneByImpot(kimpot: number): Observable<detailLigne[]>  {
    return this.http.get<detailLigne[]>(this.LOVLigneByImpotUrl + kimpot );
  }*/
  LOVLigneByImpotUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailLigneWS/LOVDetLigByImpot?kimpot=';
  LOVLigneByImpot(kimpot: number)  {
    return this.http.get<detailLigne>(this.LOVLigneByImpotUrl + kimpot );
  }

  public url_getDetLigByID = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailLigneWS/getDetLigbyID';
  getDetLigByID(KDetLigne: number): Observable<any> {
    return this.http.get<any>(`${this.url_getDetLigByID}?KDetLigne=${KDetLigne}`);
  }

  public deleteDetLigUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailLigneWS/deleteDetLigbyID?KDetLigne=';
  SupprimerDetLig(KDetLigne: number): Observable<detailLigne> {
    return this.http.delete<detailLigne>(this.deleteDetLigUrl + KDetLigne);
  }

  public ajouterDetLigUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailLigneWS/createDetLig';
  AjouterDetLig(detLig: detailLigne): Observable<detailLigne> {
    return this.http.post<detailLigne>(this.ajouterDetLigUrl, detLig , this.httpOptions);
  }

  /*AjouterDetLig( detLig : detailLigne) {
    return this.http.post(this.ajouterDetLigUrl + '/createDetLig' , detLig);
  }*/

  /*AjouterDetLig(detLig): Observable<detailLigne> {
    return this.http.post<detailLigne>(this.ajouterDetLigUrl + '/createDetLig/', JSON.stringify(detLig), this.httpOptions)
  }  */

  public url_UpdateDetLig = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailLigneWS/updateDetLig?KDetLigne=';
  modifierDetLig(detLig : detailLigne) {
    return this.http.put(this.url_UpdateDetLig + detLig.KDetLigne, detLig);
  }

  LOVLigneUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailLigneWS/LOVDetLig/';
  LOVLigne(){
    return this.http.get<detailLigne>(this.LOVLigneUrl , this.httpOptions );
  }

}
