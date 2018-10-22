import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef, 
        DocumentRef, MapServiceFactory, 
        BingMapAPILoaderConfig, BingMapAPILoader, 
        GoogleMapAPILoader,  GoogleMapAPILoaderConfig, ILatLong
       } from 'angular-maps';
import {GeoItem} from './geoitem';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }
    getAllData(): Array<GeoItem> {
        return Array<GeoItem>(
            {id: 1, name: "Ryan", domain: "localhost", geoloc: {latitude: 12, longitude: 12}}//,
            // {id: 2, name: "Google", domain: "google.com", geoloc: {latitude: -39, longitude: 70}}
        );
        // return this.http.get('http://localhost:3000/api/data');
    }
}
