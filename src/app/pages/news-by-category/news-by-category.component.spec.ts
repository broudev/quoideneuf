import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsByCategoryComponent } from './news-by-category.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';

describe('NewsByCategoryComponent', () => {
    let component: NewsByCategoryComponent;
    let fixture: ComponentFixture<NewsByCategoryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                NewsByCategoryComponent,
                HttpClientModule,
                RouterTestingModule,
                MatDialogModule,
                NgxPaginationModule,
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NewsByCategoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
