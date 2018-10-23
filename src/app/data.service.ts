import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import {MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef,
        DocumentRef, MapServiceFactory,
        BingMapAPILoaderConfig, BingMapAPILoader,
        GoogleMapAPILoader,  GoogleMapAPILoaderConfig, ILatLong
       } from 'angular-maps';
import {GeoItem} from './geoitem';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
    r;

    constructor(private http: HttpClient) { }
    getAllData(): Observable<GeoItem[]> {
        // let r: Array<GeoItem> = [];
        // r.push({id: 1, name: "Ryan", domain: "localhost", geoloc: {latitude: 12, longitude: 12}});
        // r.push({id: 2, name: "Google", domain: "google.com", geoloc: {latitude: -39, longitude: 70}});
        // r.push({id: 3, name: "BLah", domain: "blah.com", geoloc: {latitude: -19, longitude: -10}});
        // return r;
        return this.http.get<GeoItem[]>('api/data')
            .pipe(
                tap(items => console.log('fetched items'))
                catchError(this.handleError('getAllData', []))
            );
    }
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
