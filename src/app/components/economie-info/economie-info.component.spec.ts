import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomieInfoComponent } from './economie-info.component';

describe('EconomieInfoComponent', () => {
  let component: EconomieInfoComponent;
  let fixture: ComponentFixture<EconomieInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EconomieInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EconomieInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
