import { Injectable } from '@angular/core';
import { FormeJuridique } from '../classes/FormeJuridique';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SfjService {

  constructor(private http: HttpClient) { }
  public url_FJ = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/FormejuridiqueWS';


  getFJ() {return this.http.get<FormeJuridique[]>(this.url_FJ + '/FJAll/'); }


  SupprimerFJ(kFormJuri) {
    return this.http.delete(this.url_FJ + '/suppFJ/' + kFormJuri);
  }

  
  AjouterFJ( FormeJuridique) {
    return this.http.post(this.url_FJ + '/createFJ' , FormeJuridique);
  }


  modifierFJ(classe , kFormJuri) {
    return this.http.put(this.url_FJ + '/updateFJ/' + kFormJuri, classe);
  }
}
