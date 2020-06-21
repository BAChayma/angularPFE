import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { contribuableImpot } from '../classes/contribuableImpot';

@Injectable({
  providedIn: 'root'
})
export class SimpotService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  LOVImpotContriUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/ContribuableImpotWS/ImpotByContribuable?nif=';
  LOVImpotContri(){
  //return this.httpClient.get<Impot[]>(`${this.dclcontribynifUrl}${nif}`);
  //return this.httpClient.get<any>(`${this.LOVImpotContriUrl}${nif}`);
  return this.httpClient.get<contribuableImpot[]>(this.LOVImpotContriUrl+'123456' , this.httpOptions); 
} 



}
