declare var google: any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(public router: Router, public authService: AuthService, private tokenService: TokenService){}

  ngOnInit(): void {
    
  this.loadLogin();
  }
  loadLogin(): void{
    google.accounts.id.initialize({
      client_id: environment.client_id,
      callback: (response: any)=>{
        this.tokenService.setToken(response.credential)
        //this.router.navigate(['/'])
        window.location.href='/licences'
      }
    });
    google.accounts.id.prompt();
    this.showGoogleBtn()
  }
  showGoogleBtn(){
    const parent = document.getElementById('google_btn');
    google.accounts.id.renderButton(parent, {theme: "outline"});
  }

}
