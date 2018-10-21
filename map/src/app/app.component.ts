import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef, 
        DocumentRef, MapServiceFactory, 
        BingMapAPILoaderConfig, BingMapAPILoader, 
        GoogleMapAPILoader,  GoogleMapAPILoaderConfig, ILatLong
} from 'angular-maps';

let PathData: Array<any> = null;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class App {
  _markerTypeId = MarkerTypeId;
  _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1, 
    zoom: 6
  };
  
  _box: IBox = {
    maxLatitude: 32,
    maxLongitude: -92,
    minLatitude: 29,
    minLongitude: -98
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
  
  constructor() {
    this._markers.push({ latitude: 29.714994, longitude: -95.46244})
    for(let i:number=0; i<20; i++){
      this._markers.push({ latitude: 29.714994 + Math.random() - Math.random(), longitude: -95.46244 + Math.random() - Math.random()});
    }      
  }
  
  _click(index: number){
     console.log(`Marker ${index} says: hello world...`);
  }
}
