import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';


export const homeGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    if(inject(TokenService).isLogged()){
      inject(Router).navigate(['/licences'])
      return false;
    }
  return true;
};
