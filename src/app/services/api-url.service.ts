import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiUrlService {

    constructor() { }

    apiUrl: any = 'https://api-alerteinfo.alerteinfo-mairie.com/api/v1/';
}
