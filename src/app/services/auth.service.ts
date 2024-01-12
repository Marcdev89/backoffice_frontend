declare var google: any;
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router) { }

  singIn(credential: string){
    localStorage.setItem("loggedInUser", JSON.stringify(credential))
    window.location.href = '#/licences'
  }
  
  singOut(){
     google.accounts.id.disableAutoSelect();
     this.router.navigate(['/login'])
  }

  decodeToken(token: string){
    return JSON.parse(atob(token.split('.')[1]))
  }

}
