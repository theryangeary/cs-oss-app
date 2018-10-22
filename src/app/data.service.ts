import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef, 
        DocumentRef, MapServiceFactory, 
        BingMapAPILoaderConfig, BingMapAPILoader, 
        GoogleMapAPILoader,  GoogleMapAPILoaderConfig, ILatLong
       } from 'angular-maps';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }
    getAllData(): Array<ILatLong> {
        return Array<ILatLong>({latitude: 12, longitude: 12});
        // return this.http.get('http://localhost:3000/api/data');
    }
}
