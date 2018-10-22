import {FormsModule} from '@angular/forms'
import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef,   
        DocumentRef, MapServiceFactory, 
        BingMapAPILoaderConfig, BingMapAPILoader, 
        GoogleMapAPILoader,  GoogleMapAPILoaderConfig
       } from 'angular-maps';
import { App } from './app.component';
import { HttpHandler } from '@angular/common/http';

const useBing = false;

@NgModule({
    imports: [
        BrowserModule,
        useBing ? MapModule.forRootBing() : MapModule.forRootGoogle(),
        FormsModule
    ],
    declarations: [ App ],
    providers: [
        {
            provide: MapAPILoader, deps: [], useFactory: useBing ? BingMapServiceProviderFactory :  GoogleMapServiceProviderFactory,
        },
    ],
    bootstrap: [ App ]
})
export class AppModule {}

export function BingMapServiceProviderFactory(){
    let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
    bc.apiKey ="Ap0AObt84NcDaUThCeWOj52ZqUHv6k4TJhjLibR-DghC-semgoj-0uPbIi8r0E4j"; 
    bc.branch = "experimental"; 
    return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}

export function GoogleMapServiceProviderFactory(){
    const gc: GoogleMapAPILoaderConfig = new GoogleMapAPILoaderConfig();
    gc.apiKey = 'AIzaSyDe2QqXrbtaORvL-I0WHpiI72HxtfTz5Zo';
    gc.enableClustering = true;
    return new GoogleMapAPILoader(gc, new WindowRef(), new DocumentRef());
}


