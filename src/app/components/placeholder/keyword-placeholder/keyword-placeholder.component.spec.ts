import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordPlaceholderComponent } from './keyword-placeholder.component';

describe('KeywordPlaceholderComponent', () => {
  let component: KeywordPlaceholderComponent;
  let fixture: ComponentFixture<KeywordPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeywordPlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeywordPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
