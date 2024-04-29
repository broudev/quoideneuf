import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { BlogLayoutComponent } from './blog-layout.component';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';

describe('BlogLayoutComponent', () => {
    let component: BlogLayoutComponent;
    let fixture: ComponentFixture<BlogLayoutComponent>;

    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                BlogLayoutComponent,
                HttpClientTestingModule,
                RouterTestingModule,
                MatDialogModule,

            ]
        })
            .compileComponents();

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        fixture = TestBed.createComponent(BlogLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
