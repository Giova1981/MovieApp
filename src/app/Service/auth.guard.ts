import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';
import { User } from '../Model/user';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user.pipe(
    take(1),
    map((user: User) => {
      if (user.email.length > 5 && user.password.length >= 6) {
        return true;
      }
      return router.createUrlTree(['/login']);
    })
  );
};
