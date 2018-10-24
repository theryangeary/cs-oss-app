import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { App } from './app.component';
import { GeoItem } from './geoitem';
import { AppModule } from './app.module';

describe('DataService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [ GeoItem ],
        declarations: [ App ],
    }));

    it('should be created', () => {
        const service: DataService = TestBed.get(DataService);
        expect(service).toBeTruthy();
    });
});
