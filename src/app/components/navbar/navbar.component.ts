import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

isLogged: boolean=false;

constructor(public authService: AuthService, private tokenService: TokenService, public router: Router) { }

ngOnInit(): void {
  this.isLogged=this.tokenService.isLogged();
}

public logOut(): void {
  this.tokenService.logOut();
  this.router.navigate(['/login'])
  this.isLogged=false;
}


}
