import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardPlaceholderComponent } from './news-card-placeholder.component';

describe('NewsCardPlaceholderComponent', () => {
  let component: NewsCardPlaceholderComponent;
  let fixture: ComponentFixture<NewsCardPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCardPlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsCardPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
