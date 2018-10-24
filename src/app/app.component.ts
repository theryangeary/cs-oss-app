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
        // console.log(this.items);
        // this.filteredItems = this.items;
        this.filterValue = '';
        // console.log("Gonna filter" + this.items.length + "values");
        // this.filter();
        this.title = 'Where Top Domain\s Live';
    }

    ngOnInit() {
    }

    _markerTypeId = MarkerTypeId;
    _options: IMapOptions = {
        disableBirdseye: false,
        disableStreetside: false,
        navigationBarMode: 1,
        zoom: 6
    };

    items: GeoItem[];
    // filteredItems: GeoItem[];
    selectedItem: GeoItem = null;
    // name = '';
    filterValue = '';
    title: string;
    isLoading: boolean = true;
    loadIndex: number = 0;

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

    // _markers: Array<GeoItem> = new Array<GeoItem>();

    onSelect(item: GeoItem): void {
        if(this.selectedItem != item) {
            this.selectedItem = item;
        } else {
            this.selectedItem = null;
        }
        console.log("Selected item: " + this.selectedItem);
    }

    getIsLoading() {
        return this.isLoading;
    }

    searchMatchesCheckEnd(item: GeoItem, searchq, i) {
        this.loadIndex = i;
        if (i === this.items.length - 1) {
            this.isLoading = false;
        }
        this.searchMatches(item, searchq);
    }

    searchMatches(item: GeoItem, searchq) {
        searchq = searchq.toLowerCase();
        return item.domain.toLowerCase().includes(searchq) || searchq === '';
    }

    filter() {
        this.isLoading = true;
    }
    // filter() {
    //     this.filteredItems.length = 0;
    //     this._markers.length = 0;
    //     for(let i: number = 0; i<this.items.length; i++) {
    //         console.log(this.items[i].domain);
    //         if (this.searchMatches(this.items[i], this.filterValue)) {
    //             this.filteredItems.push(this.items[i]);
    //             this._markers.push(this.items[i]);
    //         }
    //     }
    // }

    getItems(): void {
        this._dataService.getAllData()
            .subscribe(items => {
                this.items = items;
            )
    }


    _click(index: number){
        console.log(`Marker ${index} says: hello world...`);
    }
}
