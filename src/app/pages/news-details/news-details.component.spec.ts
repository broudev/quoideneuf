import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailsComponent } from './news-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';

describe('NewsDetailsComponent', () => {
    let component: NewsDetailsComponent;
    let fixture: ComponentFixture<NewsDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                NewsDetailsComponent,
                HttpClientModule,
                RouterTestingModule,
                MatDialogModule,
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NewsDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
