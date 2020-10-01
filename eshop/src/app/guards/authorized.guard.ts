import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Security } from '../util/Secutity';


@Injectable()
export class AuthorizedGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        const user = Security.get();
        if (!user || !user.token) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}