import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUser } from "../domains/user.domain";

@Injectable({
    providedIn: 'root'
})

export class UserService{
    url = 'http://localhost:8080/api/v1/users-active';

    
    constructor(
        private _http: HttpClient,
    ){}
    getUsers() : Observable<IUser>{
        return this._http.get<IUser>(this.url);
    }
    getUsersByLicense(licence: String): Observable<IUser>{
        return this._http.get<IUser>(this.url+'/'+licence)
    }
}