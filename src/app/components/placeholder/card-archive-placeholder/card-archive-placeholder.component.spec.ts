import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArchivePlaceholderComponent } from './card-archive-placeholder.component';

describe('CardArchivePlaceholderComponent', () => {
  let component: CardArchivePlaceholderComponent;
  let fixture: ComponentFixture<CardArchivePlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardArchivePlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardArchivePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
