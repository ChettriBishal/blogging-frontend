import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../auth/services/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  if(!authService.isUserLoggedIn()) {
    router.navigate(['/login']); // redirect to login page
    return false;
  }
  return true;
};
