import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Security } from '../util/Secutity';

@Injectable()
export class ManagerGuard implements CanActivate {
    constructor() {
    }

    canActivate() {
        return Security.isInRole('manager');
    }
}