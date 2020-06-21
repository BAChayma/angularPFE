import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contribuable } from '../classes/Contribuable';
import { Declaration } from '../classes/Declaration';
import { Impot } from '../classes/Impot';
import { contribuableImpot } from '../classes/contribuableImpot';

@Injectable({
  providedIn: 'root'
})
export class SdeclarationService {

  constructor(private httpClient: HttpClient) { }

  contribuables: Contribuable[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

 //getContribuableByIdUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/contribuableWs/InfoContriDclByNi';
 getContribuableByIdUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/contribuableWs/InfoContribuableById?nif=';
 getContribuableById1(nif): Observable<any>{
  //return this.httpClient.get<any>(`${this.getContribuableByIdUrl}?nif=${nif}`);
  return this.httpClient.get<any>(this.getContribuableByIdUrl+'123456') 
  //return this.httpClient.get<any>(this.getContribuableByIdUrl + nif);
} 

dclcontribynifUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/DeclarationWS/DclAll?nif=';
DclContriByNif(nif: string): Observable<any>{
  //return this.httpClient.get<any>(`${this.dclcontribynifUrl}${nif}`);
  return this.httpClient.get<any>(this.dclcontribynifUrl+'123456') 
  //return this.httpClient.get<any>(this.dclcontribynifUrl + nif);
}

public deleteDclUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/DeclarationWS/deleteDclbyID?kadresse=';
  supprimerdcl(kdcl: number): Observable<Declaration> {
    return this.httpClient.delete<Declaration>(this.deleteDclUrl + kdcl);
  }

  public url_AjouterDcl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/DeclarationWS/createDcl';
  AjouterDcl( dcl : Declaration): Observable<Declaration> {
    return this.httpClient.post<Declaration>(this.url_AjouterDcl , dcl);
  }

  /* LOV */
LOVImpotUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/ImpotWS/LOVImpot/';
LOVImpot(){
  return this.httpClient.get<Impot[]>(this.LOVImpotUrl , this.httpOptions );
} 

LOVImpotContriUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/ContribuableImpotWS/ImpotByContribuable?nif=';
LOVImpotContri(nif: string){
  return this.httpClient.get<contribuableImpot[]>(`${this.LOVImpotContriUrl}${nif}`);
  //return this.httpClient.get<any>(`${this.LOVImpotContriUrl}${nif}`);
  //return this.httpClient.get<contribuableImpot[]>(this.LOVImpotContriUrl+'123456' , this.httpOptions); 
} 

LOVImpotContriUrl1: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/ContribuableImpotWS/ImpotByContribuable?nif=';
LOVImpotContri1(){
  //return this.httpClient.get<contribuableImpot[]>(`${this.LOVImpotContriUrl1}${nif}`);
  //return this.httpClient.get<any>(`${this.LOVImpotContriUrl1}${nif}`);
  return this.httpClient.get<contribuableImpot[]>(this.LOVImpotContriUrl1+'123456' , this.httpOptions); 
} 


LOVICUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/ContribuableImpotWS/ImpotByContribuable?nif=';
LOVIC(){
  return this.httpClient.get<contribuableImpot[]>(this.LOVICUrl+'123456' , this.httpOptions );
} 


}
