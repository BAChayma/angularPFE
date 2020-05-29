import { Injectable } from '@angular/core';
import { FormeJuridique } from '../classes/FormeJuridique';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SfjService {

  constructor(private http: HttpClient) { }

  fj: FormeJuridique[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public url_FJ = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/FormejuridiqueWS';


  getFJ() {return this.http.get<FormeJuridique[]>(this.url_FJ + '/FJAll/'); }

  public url_getFJByID = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/FormejuridiqueWS/getFJbyID';
  getFJByID(kFormJuri: number): Observable<any> {
    return this.http.get<any>(`${this.url_getFJByID}?kFormJuri=${kFormJuri}`);
  }

  public deleteFJUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/FormejuridiqueWS/deleteFJbyID?kFormJuri=';
  SupprimerFJ(kFormJuri: number): Observable<FormeJuridique> {
    return this.http.delete<FormeJuridique>(this.deleteFJUrl + kFormJuri);
  }

  AjouterFJ( fj : FormeJuridique): Observable<FormeJuridique> {
    return this.http.post<FormeJuridique>(this.url_FJ+ '/createActEse' , fj);
  }

  public url_UpdateFJ = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/FormejuridiqueWS/updateFJ?kFormJuri=';
  modifierFJ(fj : FormeJuridique) {
    return this.http.put(this.url_UpdateFJ + fj.kFormJuri, fj);
  }

  
}
