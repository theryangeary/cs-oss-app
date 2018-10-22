import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef, 
        DocumentRef, MapServiceFactory, 
        BingMapAPILoaderConfig, BingMapAPILoader, 
        GoogleMapAPILoader,  GoogleMapAPILoaderConfig, ILatLong
       } from 'angular-maps';
import { HttpClient, HttpHandler} from '@angular/common/http';
import {Http} from '@angular/http';
import {DataService} from './data.service';
import {GeoItem} from './geoitem';

let PathData: Array<any> = null;

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ],
    providers: [DataService, HttpClient, HttpHandler]
})
export class App {
    _markerTypeId = MarkerTypeId;
    _options: IMapOptions = {
        disableBirdseye: false,
        disableStreetside: false,
        navigationBarMode: 1,
        zoom: 6
    };

    items: Array<GeoItem>;

    _box: IBox = {
        maxLatitude: 30,
        maxLongitude: 30,
        minLatitude: -30,
        minLongitude: -10
    };

    _iconInfo: IMarkerIconInfo = {
        markerType: MarkerTypeId.CanvasMarker,
        rotation: 45,
        drawingOffset: { x: 12, y: 0 },
        points: [
            { x: 5, y: 20 },
            { x: 12, y: 15 },
            { x: 19, y: 20 },
            { x: 12, y: 0 }
        ],
        color: '#f00',
        size: { width: 24, height: 24 }
    };

    _markers: Array<ILatLong> = new Array<ILatLong>();

    constructor(private _dataService: DataService) {
        this.items = this._dataService.getAllData();
        console.log(this.items);
        console.log(this.items[0]);
        for(let i:number=0; i<this.items.length; i++){
            this._markers.push(this.items[i].geoloc)
        }
    }

    _click(index: number){
        console.log(`Marker ${index} says: hello world...`);
    }
}
