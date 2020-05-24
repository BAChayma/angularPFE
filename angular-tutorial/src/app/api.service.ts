import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contribuable } from './classes/Contribuable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 	 public SERVER_URL = "http://localhost:7101/AppTeleServiceS2V1-ViewController-context-root/resources/contribuableWs";
	 public  contribuable:Contribuable[];

	constructor(private httpClient: HttpClient) { }

	public get(){  
		return this.httpClient.get(this.SERVER_URL+'/ContribuableById');  
	}  
}
