import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { environment } from "src/environments/environment";
import { JwtHelperService } from '@auth0/angular-jwt';
import { IAuth, IResponseAuth } from '../interfaces/auth';
import { Router } from "@angular/router";
import { ErrorHandlerService } from '../services/error-handler.service';


@Injectable({
    providedIn: "root",
})

export class AuthService {
    private url: string;
    private token!: any;
    private headers!: {
        Authorization: any;
    };

    public decodeLocalToken() {
        const token = this.getLogin();
        return this.jwtHelper.decodeToken(token);
    }


    constructor(private _router: Router,
        public jwtHelper: JwtHelperService,
        private _errorhandlerService: ErrorHandlerService) {
        this.token = this.getToken();
        this.url = environment.baseUrl + '/auth'
        this.headers = {
            Authorization: `Bearer ${this.token}`,
        };
    }

    getToken() {
        return localStorage.getItem('token');
    }

    async login(user: any) {
        try {
            const res = await axios.post(`${this.url}/signin`, user);
            if (res.data) return res.data;
            else throw new Error();
        } catch (error) {
            throw this._errorhandlerService.getError(error)
        }
    }

    public setLogin(token: string): void {
        localStorage.setItem('token', token);
    }
    public getLogin(): string {
        return localStorage.getItem('token') || '';
    }
    public setRemoveToken(): void {
        return localStorage.removeItem('token');
    }

    public logOut(): void {
        localStorage.clear();
        this._router.navigate(['/auth/singIn'], { replaceUrl: true });
    }

    public isAuthenticated(): boolean | undefined {
        const token = this.getLogin();

        try {
            if (this.jwtHelper.isTokenExpired(token)) {
                localStorage.clear();
                return false;
            }
        } catch (error) {
            /* localStorage.clear();
            return false; */
        }
        return true;
    }
}