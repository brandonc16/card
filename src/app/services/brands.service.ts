import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Uris } from './uris';
import { environment } from '../environments/environmens';

@Injectable ({
    providedIn: 'root'
})
export class apiService {
    constructor(private http: HttpClient) {
    }
    brandList() {
    return this.http.get(`${Uris.api}${environment.apiKey}${Uris.brands}`);
    }
    catList() {
        return this.http.get(`${Uris.api}${environment.apiKey}${Uris.cat}`);
        }
}