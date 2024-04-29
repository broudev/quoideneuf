import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaNewsComponent } from './media-news.component';

describe('MediaNewsComponent', () => {
  let component: MediaNewsComponent;
  let fixture: ComponentFixture<MediaNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
