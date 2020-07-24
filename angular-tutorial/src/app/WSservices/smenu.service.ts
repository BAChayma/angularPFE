import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { menu } from '../classes/menu';

@Injectable({
  providedIn: 'root'
})
export class SmenuService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  menuPUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/MenuWS/MenuP';
  menuP(){
    return this.httpClient.get<menu>(this.menuPUrl , this.httpOptions); 
  } 

  menuFUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/MenuWS/MenuF';
  menuF(){
    return this.httpClient.get<menu>(this.menuFUrl , this.httpOptions); 
  } 

  menuUrl: string = 'http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/MenuWS/Menu';
  menu(){
    return this.httpClient.get<menu>(this.menuUrl , this.httpOptions); 
  } 

}
