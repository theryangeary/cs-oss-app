
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import {NgModule, VERSION, OnInit} from '@angular/core'
import { By } from '@angular/platform-browser';
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
// import 'zone.js';
import 'zone.js/dist/async-test.js';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import { App } from './app.component';
import { AppModule } from './app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

let comp:    App;
let fixture: ComponentFixture<App>;
let service: DataService;
let http: HttpClient;
let itemlist: Array<GeoItem>;
let DATA: Array<GeoItem> = [
    {
        "id": 1,
        "domain": "google.com",
        "geoloc": {
            "latitude": 37.7510,
            "longitude": -97.8220
        }
    },
    {
        "id": 2,
        "domain": "youtube.com",
        "geoloc": {
            "latitude": 37.7510,
            "longitude": -97.8220
        }
    },
    {
        "id": 3,
        "domain": "facebook.com",
        "geoloc": {
            "latitude": 38.6582,
            "longitude": -77.2497
        }
    },
    {
        "id": 4,
        "domain": "baidu.com",
        "geoloc": {
            "latitude": 39.9289,
            "longitude": 116.3880
        }
    },
    {
        "id": 5,
        "domain": "wikipedia.org",
        "geoloc": {
            "latitude": 37.7510,
            "longitude": -97.8220
        }
    }
]

describe('App & AppModule', () => {
    beforeAll(() => {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment( BrowserDynamicTestingModule, platformBrowserDynamicTesting() );
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(App);
                comp = fixture.componentInstance;
            });
        service = new DataService(http);
    }));

    it('should have title \'Where Top Domains Live\'', function() {
        const fixture = TestBed.createComponent(App);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Where Top Domains Live');
    });

    it('should have empty filterValue', function() {
        const fixture = TestBed.createComponent(App);
        const app = fixture.debugElement.componentInstance;
        expect(app.filterValue).toEqual('');
    })

    it('should load json data', function() {
        const fixture = TestBed.createComponent(App);
        const app = fixture.debugElement.componentInstance;
        expect(app.items.length > 0).toBeTruthy;
    })

    // TESTS TO ENSURE THAT FILTER INPUT AND TABLE HEADERS EXIST

    it('should have <span> with "Filter"', () => {
        const spanElement: HTMLElement = fixture.nativeElement;
        const span = spanElement.querySelector('span');
        expect(span.textContent).toEqual('Filter');
    });

    it('should have <th> series with "Rank", "Domain", "Coordinates", and "Hostname"', () => {
        const fixture = TestBed.createComponent(App);
        const thelement: HTMLElement = fixture.nativeElement;
        const th = thelement.querySelectorAll('th');
        expect(th[0].textContent).toEqual('Rank');
        expect(th[1].textContent).toEqual('Domain');
        expect(th[2].textContent).toEqual('Coordinates');
        expect(th[3].textContent).toEqual('Hostname');
    });

    // TESTS FOR MAKING SURE MOCK DATA IS LOADED (MOCK DATA FOR TESTING PURPOSES ONLY)

    it('should get mock data', function() {
        const fixture = TestBed.createComponent(App);
        const app = fixture.debugElement.componentInstance;
        app.items = DATA;
        expect(app.items.length).toBeGreaterThan(0);
    });

    it('should access mock data', function() {
        const fixture = TestBed.createComponent(App);
        const app = fixture.debugElement.componentInstance;
        app.items = DATA;
        expect(app.items[0].domain).toEqual("google.com");
    })

    // TESTS FOR TABLE FILTERING

    it('should show google.com as first domain', function() {
        const fixture = TestBed.createComponent(App);
        const app = fixture.debugElement.componentInstance;
        app.items = DATA;
        fixture.autoDetectChanges();
        const element: HTMLElement = fixture.nativeElement;
        const t = element.querySelectorAll('td');
        expect(t[1].textContent).toEqual('google.com');
    });

    it('should show facebook.com as first domain when filter set to facebook.com', function() {
        const fixture = TestBed.createComponent(App);
        const app = fixture.debugElement.componentInstance;
        app.items = DATA;
        app.filterValue = "facebook.com";
        fixture.autoDetectChanges();
        const element: HTMLElement = fixture.nativeElement;
        const t = element.querySelectorAll('td');
        expect(t[1].textContent).toEqual('facebook.com');
    });

    it('should show facebook.com as first domain when filter set to face', function() {
        const fixture = TestBed.createComponent(App);
        const app = fixture.debugElement.componentInstance;
        app.items = DATA;
        app.filterValue = "face";
        fixture.autoDetectChanges();
        const element: HTMLElement = fixture.nativeElement;
        const t = element.querySelectorAll('td');
        expect(t[1].textContent).toEqual('facebook.com');
    });

    it('should show facebook.com as first domain when filter set to book', function() {
        const fixture = TestBed.createComponent(App);
        const app = fixture.debugElement.componentInstance;
        app.items = DATA;
        app.filterValue = "face";
        fixture.autoDetectChanges();
        const element: HTMLElement = fixture.nativeElement;
        const t = element.querySelectorAll('td');
        expect(t[1].textContent).toEqual('facebook.com');
    });

    it('should show wikipedia.org as first domain when filter set to org', function() {
        const fixture = TestBed.createComponent(App);
        const app = fixture.debugElement.componentInstance;
        app.items = DATA;
        app.filterValue = "org";
        fixture.autoDetectChanges();
        const element: HTMLElement = fixture.nativeElement;
        const t = element.querySelectorAll('td');
        expect(t[1].textContent).toEqual('wikipedia.org');
    });

    it('should show wikipedia.org as first domain when filter set to .org', function() {
        const fixture = TestBed.createComponent(App);
        const app = fixture.debugElement.componentInstance;
        app.items = DATA;
        app.filterValue = ".org";
        fixture.autoDetectChanges();
        const element: HTMLElement = fixture.nativeElement;
        const t = element.querySelectorAll('td');
        expect(t[1].textContent).toEqual('wikipedia.org');
    });
})
