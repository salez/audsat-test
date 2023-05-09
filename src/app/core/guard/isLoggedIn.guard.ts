import { inject } from "@angular/core";
import { CanMatchFn, Route, Router, UrlSegment } from "@angular/router";
import { AuthService } from "@core/auth/services/auth.service";
import { catchError, map, of } from "rxjs";

function redirectToLogin(router: Router, urlSegment: UrlSegment[]) {
  const urlToRedirect = urlSegment.join('/');
  return router.createUrlTree(['/login'], { queryParams: { redirect: urlToRedirect } });
}

export const canMatchLoggedIn: CanMatchFn = (route, urlSegment) => {
  const router = inject(Router);
  return inject(AuthService).isLoggedIn$.pipe(
    map(isLoggedIn => isLoggedIn || redirectToLogin(router, urlSegment)),
    catchError(() => {
      return of(router.createUrlTree(['/login']));
    })
  );
}