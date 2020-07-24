import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { detailColonne } from '../classes/detailColonne';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SDetColonneService {

  constructor(private http: HttpClient) { }

  detCol: detailColonne[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public AllColUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailColonneWS/DetColAll';
  getAllDetCol() 
  {return this.http.get<detailColonne[]>(this.AllColUrl , this.httpOptions ); }

  public getAllDetColByImpotUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailColonneWS/DetColAllByImpot?kimpot=';
  getAllDetColByImpot(kimpot: number) : Observable<any>
  {//return this.http.get<detailColonne[]>(this.getAllDetColByImpotUrl + kimpot ); 
    return this.http.get<any>(this.getAllDetColByImpotUrl+kimpot) }

  LOVColByImpotUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailColonneWS/LOVDetColByImpot?kimpot=';
  LOVColByImpot(kimpot: number)  {
    return this.http.get<detailColonne>(this.LOVColByImpotUrl + kimpot );
  }

  public url_getAEByID = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailColonneWS/getDetColbyID';
  getDetColByID(KDetColonne: number): Observable<any> {
    return this.http.get<any>(`${this.url_getAEByID}?KDetColonne=${KDetColonne}`);
  }

  public deleteDetColUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailColonneWS/deleteDetColbyID?KDetColonne=';
  SupprimerDetCol(KDetColonne: number): Observable<detailColonne> {
    return this.http.delete<detailColonne>(this.deleteDetColUrl + KDetColonne);
  }

  public ajouterDetColUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailColonneWS/createDetCol';
  AjouterDetCol( detCol : detailColonne): Observable<detailColonne> {
    return this.http.post<detailColonne>(this.ajouterDetColUrl , detCol , this.httpOptions);
  }

  public url_UpdateDetCol = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailColonneWS/updateDetCol?KDetColonne=';
  modifierDetCol(detCol : detailColonne) {
    return this.http.put(this.url_UpdateDetCol + detCol.KDetColonne, detCol);
  }

  LOVColUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/detailColonneWS/LOVDetCol/';
  LOVCol(){
    return this.http.get<detailColonne>(this.LOVColUrl , this.httpOptions );
  }


}
