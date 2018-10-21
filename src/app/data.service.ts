import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';

export interface Data {
    lat: number,
    long: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }
    getAllData(): Observable<Data[]> {
        console.log("ACK");
        console.log(this.http.get<Data[]>('http://localhost:3000/api/data'));
        return this.http.get<Data[]>('http://localhost:3000/api/data');
    }
}
