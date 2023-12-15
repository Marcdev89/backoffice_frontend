import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ILicence } from "../domains/licence.domain";

@Injectable({
    providedIn: 'root'
})

export class LicenceService{
    url = 'http://localhost:8080/api/v1/licence';
    
    constructor(
        private _http: HttpClient,
    ){}
    getLicences() : Observable<ILicence>{
        return this._http.get<ILicence>(this.url);
    }
}