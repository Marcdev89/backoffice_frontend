import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUser } from "../domains/user.domain";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class UserService{
    
    constructor(
        private _http: HttpClient,
    ){}
    getUsers() : Observable<IUser>{
        return this._http.get<IUser>(environment.users);
    }
    getUsersByLicense(licence: String): Observable<IUser>{
        return this._http.get<IUser>(environment.users+'/'+licence)
    }
}