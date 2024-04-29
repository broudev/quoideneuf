import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsByKeywordsComponent } from './news-by-keywords.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';

describe('NewsByKeywordsComponent', () => {
    let component: NewsByKeywordsComponent;
    let fixture: ComponentFixture<NewsByKeywordsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                NewsByKeywordsComponent,
                HttpClientModule,
                RouterTestingModule,
                MatDialogModule,
                NgxPaginationModule,
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NewsByKeywordsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
