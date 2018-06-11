import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class NotAuthenticateGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isTokenExist: boolean = !!localStorage.getItem('token');

        if (isTokenExist) {
            this.router.navigate([ '/dashboard' ]);
            return false;
        }

        return true;
    }
}
