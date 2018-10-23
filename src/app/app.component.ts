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
        this.filteredItems = this.items;
        this.filter();
    }

    ngOnInit() {
        // this.constructMarkers(this.filterValue);
    }

    _markerTypeId = MarkerTypeId;
    _options: IMapOptions = {
        disableBirdseye: false,
        disableStreetside: false,
        navigationBarMode: 1,
        zoom: 6
    };

    items: GeoItem[];
    filteredItems: GeoItem[];
    selectedItem: GeoItem = null;
    name = '';
    filterValue = '';

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

    onSelect(item: GeoItem): void {
        if(this.selectedItem != item) {
            this.selectedItem = item;
        } else {
            this.selectedItem = null;
        }
        console.log("Selected item: " + this.selectedItem);
    }

    searchMatches(item: GeoItem, searchq) {
        searchq = searchq.toLowerCase();
        return item.domain.toLowerCase().includes(searchq) || searchq === '';
    }

    filter() {
        var d = new Date();
        this.filteredItems.length = 0;
        this._markers.length = 0;
        for(let i: number = 0; i<this.items.length; i++) {
            if (this.searchMatches(this.items[i], this.filterValue)) {
                this.filteredItems.push(this.items[i]);
                // console.log(d.getTime() + this.items[i].domain);
                this._markers.push(this.items[i].geoloc);
            }
        }
        // this._markers.length = 0;
        // this.constructMarkers(this.filterValue);
        // return this.items.filter(this.hasName);
    }

    // constructMarkers(filterValue) {
    //     console.log(filterValue);
    //     for(let i:number=0; i<this.items.length; i++){
    //         if (this.searchMatches(this.items[i], filterValue)) {
    //             console.log(this.items[i].domain);
    //             this._markers.push(this.items[i].geoloc);
    //         }
    //     }
    // }

    getItems(): void {
        this._dataService.getAllData()
            .subscribe(items => this.items = items)
    }


    _click(index: number){
        console.log(`Marker ${index} says: hello world...`);
    }
}
