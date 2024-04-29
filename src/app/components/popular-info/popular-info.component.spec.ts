import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularInfoComponent } from './popular-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material-module';

describe('PopularInfoComponent', () => {
    let component: PopularInfoComponent;
    let fixture: ComponentFixture<PopularInfoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                PopularInfoComponent,
                HttpClientTestingModule,
                HttpClientModule,
                MaterialModule
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PopularInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
