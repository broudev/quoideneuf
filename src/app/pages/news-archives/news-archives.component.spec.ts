import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArchivesComponent } from './news-archives.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';

describe('NewsArchivesComponent', () => {
    let component: NewsArchivesComponent;
    let fixture: ComponentFixture<NewsArchivesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                NewsArchivesComponent,
                HttpClientModule,
                RouterTestingModule,
                MatDialogModule,
                NgxPaginationModule,
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NewsArchivesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
