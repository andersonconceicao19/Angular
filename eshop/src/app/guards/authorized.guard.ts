import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Security } from '../util/Secutity';
import { UserModel } from '../models/user.model';


@Injectable()
export class AuthorizedGuard implements CanActivate {
    user: UserModel;
    constructor(private router: Router) {
    }

    canActivate() {
        this.user = Security.get();
        console.log(this.user);
        if (!this.user || !this.user.token) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}