import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordEventsComponent } from './keyword-events.component';
import { MaterialModule } from '../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('KeywordEventsComponent', () => {
  let component: KeywordEventsComponent;
  let fixture: ComponentFixture<KeywordEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        KeywordEventsComponent,
        HttpClientTestingModule,
        HttpClientModule,
        MaterialModule
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
