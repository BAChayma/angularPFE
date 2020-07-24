import { Injectable } from '@angular/core';

/*const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';*/

const TOKEN_KEY = 'ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmxlSEFpT2pFMU9UVXlNekF4TnpnNE5Ua3NJa1Y0ZEhKaFVHRnlZVzB5SWpvaWRHVnpkQ0lzSW1semN5STZJa0Z3Y0ZSbGJHVlRaWEoyYVdObFV6SldNU0lzSW1saGRDSTZNVFU1TlRJeU9UZzNPRGcxT1N3aVJYaDBjbUZRWVhKaGJTSTZJblJsYzNRaWZRLk50ZnYxSm1CakFmNEZPd25LTEdsc3dINE5VdFphWnhnV2syTi1ucVh3eWN2MzBnbVVtaVltRDB2U3hJbTZVS2tfY2xqd0dCcmljVVpXZEFnT1h6WUd';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    /*window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));*/
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, JSON.stringify(user));
  }

  public getUser() {
    //return JSON.parse(sessionStorage.getItem(USER_KEY));
    return JSON.parse(sessionStorage.getItem(TOKEN_KEY));
  }

}
