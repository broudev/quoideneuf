import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDialogComponent } from './popup-dialog.component';
import { MaterialModule } from '../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('PopupDialogComponent', () => {
  let component: PopupDialogComponent;
  let fixture: ComponentFixture<PopupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PopupDialogComponent,
        HttpClientTestingModule,
        HttpClientModule,
        MaterialModule
    ],
    providers: [
        {
        provide: MatDialogRef,
            useValue: []
        },
        {
        provide: MAT_DIALOG_DATA,
        useValue: []
        }
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
