import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneInfoComponent } from './une-info.component';
import { MaterialModule } from '../../material-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('UneInfoComponent', () => {
  let component: UneInfoComponent;
  let fixture: ComponentFixture<UneInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UneInfoComponent,
        HttpClientTestingModule,
        HttpClientModule,
        MaterialModule
    ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(UneInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
