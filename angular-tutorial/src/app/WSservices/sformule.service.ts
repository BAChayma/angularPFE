import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Formule } from '../classes/Formule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SformuleService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  addFormuleUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/FormuleWS/createFormule';
  AjouterFormule( formule : Formule): Observable<Formule> {
    return this.httpClient.post<Formule>(this.addFormuleUrl , formule , this.httpOptions);
  }

  public FormuleByImpotUrl = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/FormuleWS/FormuleByImpot?kimpot=';
  FormuleByImpot(kimpot: number) : Observable<any>
  { return this.httpClient.get<any>(this.FormuleByImpotUrl+kimpot)}

}
