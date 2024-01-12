import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';

export const loginGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    if(!inject(TokenService).isLogged()){
      inject(Router).navigate(['/login'])
      return false;
    }
  return true;
};
