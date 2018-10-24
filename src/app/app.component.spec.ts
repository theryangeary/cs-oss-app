
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
    }));

    it('should have title \'Where Top Domains Live\'', function() {
        const fixture = TestBed.createComponent(App);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Where Top Domains Live');
    });
})
