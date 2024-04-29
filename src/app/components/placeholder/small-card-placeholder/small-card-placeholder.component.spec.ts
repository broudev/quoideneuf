import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardPlaceholderComponent } from './small-card-placeholder.component';

describe('SmallCardPlaceholderComponent', () => {
  let component: SmallCardPlaceholderComponent;
  let fixture: ComponentFixture<SmallCardPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallCardPlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallCardPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
