import { UserModel } from '../models/user.model';
export class Security{
     static set(user: UserModel)
    {
        const data = JSON.stringify(user);
        localStorage.setItem('shop.data', btoa(data));
    }
    static get(): UserModel
    {

        const data = localStorage.getItem('shop.data');
        console.log(`${data} dados` );
        if (data)
        {
            return JSON.parse(atob(data));
        } else {
            return null;
        }
    }
    static hasToken(): boolean {
        const user = this.get();

        if (user && user.token){
            return true;
        } else{
            return false;
        }
    }
    static isInRole(role: string): boolean {
        const user = this.get();
        if (!user) {
            return false;
        }
        if (!user.roles || user.roles.length === 0) {
            return false;
        }
        return user.roles.includes(role);
    }
    static clear()
    {
        localStorage.removeItem('shop.data');
    }
}