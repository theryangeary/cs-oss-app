import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { App } from './app.component';
import { GeoItem } from './geoitem';
import { AppModule } from './app.module';

let itemList: Array<GeoItem>;
let service: DataService;


describe('DataService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [ AppModule ],
    }));

    beforeEach(async(() => {
        service = TestBed.get(DataService);
        service.getAllData().subscribe(items => {itemList = items});
    }));

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have content', () => {
        expect(service.getAllData()).toBeTruthy();
    });

    it('should populate list', () => {
        expect(service.getAllData().subscribe(items => {itemList = items})).toBeTruthy();
    });

    it('should have google.com as first domain', () => {
        console.log(itemList);
        expect(itemList[0].domain).toEqual('google.com');
    });
});
