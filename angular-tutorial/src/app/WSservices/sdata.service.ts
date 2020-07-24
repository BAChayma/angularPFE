import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SdataService {

  sharedNif: string;

  constructor() { }

  setsharedNif(value) {      
    this.sharedNif = value;  
  }  
  
  getsharedNif() {  
    return this.sharedNif;  
  }  
}
