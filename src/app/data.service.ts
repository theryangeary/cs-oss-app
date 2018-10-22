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
        let r: Array<GeoItem> = [];
        r.push({id: 1, name: "Ryan", domain: "localhost", geoloc: {latitude: 12, longitude: 12}});
        r.push({id: 2, name: "Google", domain: "google.com", geoloc: {latitude: -39, longitude: 70}});
        r.push({id: 3, name: "BLah", domain: "blah.com", geoloc: {latitude: -19, longitude: -10}});
        return r;
        // return this.http.get('http://localhost:3000/api/data');
    }
}
