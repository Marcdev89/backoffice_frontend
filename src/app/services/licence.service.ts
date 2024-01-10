import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ILicence } from "../domains/licence.domain";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class LicenceService{
    
    constructor(
        private _http: HttpClient,
    ){}

    getLicences() : Observable<ILicence[]>{
        return this._http.get<ILicence[]>(environment.licence);
    }
}