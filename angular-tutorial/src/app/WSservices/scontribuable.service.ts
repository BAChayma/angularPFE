import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contribuable } from '../classes/Contribuable';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScontribuableService {

  constructor(private httpClient: HttpClient) { }

  //contribuable: Contribuable[] = [];
  //private contribuable = new Contribuable('','','');

  contribuables: Contribuable[];

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
 getContribuableByIdUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/contribuableWs/ContribuableById?nif=';
 getContribuableById1(nif){
  return this.httpClient.get<Contribuable[]>(this.getContribuableByIdUrl+'123456') 
} 

 //getContribuableById(nif) 
 //{return this.httpClient.get<Contribuable>(this.SERVER_URL + '/ContribuableById/' + nif); }

 //getContribuableById1(nif) 
 //{return this.httpClient.get<Contribuable>('http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/contribuableWs/ContribuableById?nif=123456'); }

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

LOVBanqUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/banqueWS/LOVBanque/';
LOVBanque(){
  return this.httpClient.get<Contribuable[]>(this.LOVBanqUrl , this.httpOptions );
} 

LOVAgenceUrl: string = 'http://127.0.0.1:7101/AppTeleServiceS2V1-ViewController-context-root/resources/agenceWS/LOVAgence/?kbanque=';
LOVAgence(kbanque){
  return this.httpClient.get<Contribuable[]>(this.LOVAgenceUrl+kbanque) 
} 

updateCBUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/compteBancaieWS/CompteBancaire/';
 updateCB(contribuables : Contribuable): Observable<Contribuable> {
  return this.httpClient.put<Contribuable>(this.updateCBUrl , contribuables);
  //return this.httpClient.put<Contribuable>(this.updateCBUrl + kcompte , contribuables);
}

getCBByIdUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/compteBancaieWS/getCBbyID/?kcompte=';
getCBById(id : number){
  return this.httpClient.get<Contribuable[]>(this.getCBByIdUrl+id) 
} 

}


