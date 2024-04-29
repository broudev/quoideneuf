import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueInfoComponent } from './politique-info.component';
import { MaterialModule } from '../../material-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('PolitiqueInfoComponent', () => {
    let component: PolitiqueInfoComponent;
    let fixture: ComponentFixture<PolitiqueInfoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                PolitiqueInfoComponent,
                HttpClientTestingModule,
                HttpClientModule,
                MaterialModule
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PolitiqueInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
