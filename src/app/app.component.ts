import {Component, NgModule, VERSION, OnInit} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef, 
        DocumentRef, MapServiceFactory, 
        BingMapAPILoaderConfig, BingMapAPILoader, 
        GoogleMapAPILoader,  GoogleMapAPILoaderConfig, ILatLong
       } from 'angular-maps';
import { HttpClient, HttpHandler} from '@angular/common/http';
import {Http} from '@angular/http';
import {DataService} from './data.service';
import {Observable} from 'rxjs';
import {GeoItem} from './geoitem';

let PathData: Array<any> = null;

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ],
    providers: [DataService, HttpClient]
})
export class App {
    constructor(private _dataService: DataService) {
        this.items = [];
        this.getItems();
        this.filterValue = '';
        this.title = 'Where Top Domains Live';
    }

    ngOnInit() {
    }

    _markerTypeId = MarkerTypeId;
    _options: IMapOptions = {
        disableBirdseye: false,
        disableStreetside: false,
        navigationBarMode: 1,
        zoom: 1
    };

    items: GeoItem[];
    selectedItem: GeoItem = null;
    filterValue = '';
    title: string;

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

    searchMatches(item: GeoItem, searchq) {
        searchq = searchq.toLowerCase();
        return item.domain.toLowerCase().includes(searchq) || searchq === '';
    }

    getItems(): void {
        this._dataService.getAllData()
            .subscribe(items => {
                this.items = items;
            });
    }

}
