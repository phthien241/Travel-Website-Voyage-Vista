import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  return authService.isAuthenticated().pipe(
    tap(response=>{
      console.log(response);
      if(!response){
        localStorage.removeItem("userEmail");
        router.navigate(['login']);
      }
    })
  )
};
