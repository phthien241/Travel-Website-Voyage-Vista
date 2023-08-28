import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, tap } from 'rxjs';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  return authService.isAuthenticated().pipe(
    map(response=>{
      if(response){
        router.navigate(['']);
      }
      return !response;
    })
    )
};
