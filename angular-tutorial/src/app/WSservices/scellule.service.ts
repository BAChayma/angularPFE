import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cellule } from '../classes/Cellule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScelluleService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public ajouterCelUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/CelluleWS/createCellule';
  AjouterCel(cel : Cellule): Observable<Cellule> {
    return this.http.post<Cellule>(this.ajouterCelUrl, cel , this.httpOptions);
  }

  public lovCelUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/CelluleWS/LOVCellule';
  LOVCellule(){
    return this.http.get<Cellule>(this.lovCelUrl , this.httpOptions );
  } 



}
