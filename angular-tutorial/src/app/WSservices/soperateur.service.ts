import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Operateur } from '../classes/Operateur';

@Injectable({
  providedIn: 'root'
})
export class SoperateurService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  LOVOpUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/OperateurWS/operateurAll';
  LOVOp(){
  return this.httpClient.get<Operateur>(this.LOVOpUrl , this.httpOptions); 
} 


}
