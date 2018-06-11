import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isTokenExist: boolean = !!localStorage.getItem('token');

        if (isTokenExist) {
            return true;
        }

        this.router.navigate([ '/sign-up' ]);
        return false;
    }
}
