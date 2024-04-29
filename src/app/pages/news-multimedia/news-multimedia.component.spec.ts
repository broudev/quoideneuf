import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMultimediaComponent } from './news-multimedia.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewsMultimediaComponent', () => {
    let component: NewsMultimediaComponent;
    let fixture: ComponentFixture<NewsMultimediaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                NewsMultimediaComponent,
                HttpClientModule,
                HttpClientModule,
                RouterTestingModule,
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NewsMultimediaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
