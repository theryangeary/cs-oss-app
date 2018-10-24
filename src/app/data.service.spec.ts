import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { App } from './app.component';
import { GeoItem } from './geoitem';
import { AppModule } from './app.module';

describe('DataService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [ AppModule ],
    }));

    it('should be created', () => {
        const service: DataService = TestBed.get(DataService);
        service.getAllData();
        expect(service).toBeTruthy();
    });
});
