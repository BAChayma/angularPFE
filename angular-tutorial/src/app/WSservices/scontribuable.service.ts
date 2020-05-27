import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contribuable } from '../classes/Contribuable';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Adresse } from '../classes/Adresse';
import { CompteBancaire } from '../classes/ComteBancaire';


@Injectable({
  providedIn: 'root'
})
export class ScontribuableService {

  constructor(private httpClient: HttpClient) { }

  contribuables: Contribuable[];
  adresses: Adresse[];
  comteBancaires: CompteBancaire[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public SERVER_URL = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/contribuableWs';

 getAllContribuable1() :Observable<Contribuable[]> 
 {return this.httpClient.get<Contribuable[]>(this.SERVER_URL + '/AllContribuable' , {responseType: 'json'}); }

 getAllContribuable() {return this.httpClient.get<Contribuable>(this.SERVER_URL + '/AllContribuable')}

 //getContribuableByIdUrl: string = 'http://127.0.0.1:7101/AppTeleServiceS2V1-ViewController-context-root/resources/agenceWS/LOVAgence/?kbanque=';
 //valide
 //getContribuableByIdUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/contribuableWs/ContribuableById?nif=';
 //getContribuableByIdUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/contribuableWs/ContribuableByNIF?nif=';
 getContribuableByIdUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/contribuableWs/InfoContribuableById?nif=';
 getContribuableById1(nif): Observable<any>{
  //return this.httpClient.get<any>(`${this.getContribuableByIdUrl}?nif=${nif}`);
  return this.httpClient.get<any>(this.getContribuableByIdUrl+'123456') 
} 

adrcontribynifUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/adresseWS/AdresseInfoContribuableById?nif=';
AdrContriByNif(nif): Observable<any>{
  //return this.httpClient.get<any>(`${this.adrcontribynifUrl}?nif=${nif}`);
  return this.httpClient.get<any>(this.adrcontribynifUrl+'123456') 
} 

cbcontribynifUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/compteBancaieWS/CBInfoContribuableById?nif=';
CbContriByNif(nif): Observable<any>{
  //return this.httpClient.get<any>(`${this.cbcontribynifUrl}?nif=${nif}`);
  return this.httpClient.get<any>(this.cbcontribynifUrl+'123456') 
} 

 SupprimerContribuable(nif) {
  return this.httpClient.delete(this.SERVER_URL + '/deleteContribuableById/' + nif);
}

AjouterContribuable(contribuables) {
  return this.httpClient.post(this.SERVER_URL + '/addContribuable' , contribuables);
}

modifierContribuable(contribuables : Contribuable):Observable<any> {
return this.httpClient.post('http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/contribuableWs/updateContribuable' , contribuables );
} 

modifierContribuable1(contribuables){
  return this.httpClient.put('http://127.0.0.1:7101/AppTeleServiceS2V1-ViewController-context-root/resources/contribuableWs/updateContribuable/' ,this.httpOptions  );
  } 

 updateContribuableUrl: string = 'http://127.0.0.1:7101/AppTeleServiceS2V1-ViewController-context-root/resources/contribuableWs/updateContribuable/';
 updateContribuable(contribuables : Contribuable): Observable<Contribuable> {
  return this.httpClient.put<Contribuable>(this.updateContribuableUrl , contribuables);
}

/* service compte bancaire */

/*updateCBUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/compteBancaieWS/updateCB/';
 updateCB(comteBancaires : CompteBancaire): Observable<CompteBancaire> {
  return this.httpClient.put<CompteBancaire>(this.updateCBUrl , comteBancaires);
  //return this.httpClient.put<Contribuable>(this.updateCBUrl + kcompte , contribuables);
}*/
public updateCBUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/compteBancaieWS/updateCB?kcompte=';
updateCB(cb : CompteBancaire) {
    return this.httpClient.put(this.updateCBUrl + cb.kcompte, cb);
  }

  public deleteCBUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/compteBancaieWS/deleteCBbyID?kcompte=';
  supprimercb(kcompte: number): Observable<CompteBancaire> {
    return this.httpClient.delete<CompteBancaire>(this.deleteCBUrl + kcompte);
  }

public url_cb = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/compteBancaieWS';
AjouterCB( cb : CompteBancaire): Observable<CompteBancaire> {
  return this.httpClient.post<CompteBancaire>(this.url_cb + '/createCB' , cb);
}

getCBByIdUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/compteBancaieWS/getCBbyID';
/*getCBById(id : number){
  return this.httpClient.get<CompteBancaire[]>(this.getCBByIdUrl+id) 
} */
getCBById(kcompte: number): Observable<any> {
  return this.httpClient.get<any>(`${this.getCBByIdUrl}?kcompte=${kcompte}`);
}


/* service adresse */ 

/*updateADRUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/adresseWS/updateAdr/';
 updateADR(adresses : Adresse): Observable<Adresse> {
  return this.httpClient.put<Adresse>(this.updateADRUrl , adresses);
}*/
public url_UpdateAdr: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/ActiviteEntrepriseWS/updateAdr?kadresse=';
  modifierAdr(adr : Adresse) {
    return this.httpClient.put(this.url_UpdateAdr + adr.kadresse, adr);
  }

  public deleteADRUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/compteBancaieWS/deleteAdrbyID?kadresse=';
  supprimeradr(kadresse: number): Observable<Adresse> {
    return this.httpClient.delete<Adresse>(this.deleteADRUrl + kadresse);
  }

public url_Adr = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/adresseWS';
AjouterAdr( adr : Adresse): Observable<Adresse> {
  return this.httpClient.post<Adresse>(this.url_Adr + '/createAdr' , adr);
}

getADRByIdUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/adresseWS/getAdrbyID/?kadresse=';
getADRById(id : number){
  return this.httpClient.get<Adresse[]>(this.getADRByIdUrl+id) 
} 

/* lov */

LOVBanqUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/banqueWS/LOVBanque/';
LOVBanque(){
  return this.httpClient.get<Contribuable[]>(this.LOVBanqUrl , this.httpOptions );
} 

LOVAgenceUrl: string = 'http://127.0.0.1:7101/AppTeleServiceS2V1-ViewController-context-root/resources/agenceWS/LOVAgence/?kbanque=';
LOVAgence(kbanque){
  return this.httpClient.get<Contribuable[]>(this.LOVAgenceUrl+kbanque) 
} 

LOVSADRUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/StructureAdrWS/LOVStructureAdr/';
LOVSADR(){
  return this.httpClient.get<any[]>(this.LOVSADRUrl , this.httpOptions );
} 

LOVTSADRUrl: string = 'http://127.0.0.1:7101/AppTeleServiceS2V1-ViewController-context-root/resources/TypeStructureAdrWS/LOVTypeStructureAdr/';
LOVTSADR(){
  return this.httpClient.get<any[]>(this.LOVTSADRUrl , this.httpOptions );
} 

}


