import { Component, OnInit } from '@angular/core';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material-module';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-popup-dialog',
    standalone: true,
    imports: [
        CommonModule,
        MaterialModule,
    ],
    
    templateUrl: './popup-dialog.component.html',
    styleUrl: './popup-dialog.component.css'
})
export class PopupDialogComponent implements OnInit {

    public banner_url: string = '';



    constructor(
        private _traitements: TreatmentsRequestService,
        private _dialogRef: MatDialogRef<PopupDialogComponent>,
    ) { }


    ngOnInit(): void {
        this._traitements.getPopUpBanner().subscribe({

            next: (response: any) => {
                this.banner_url = response.banner_image;
            },
            error: (error: any) => {
                if (error.status == 401) {
                    console.log(error)

                }
            }
        });

    }


    closePopup()
    {
        this._dialogRef.close();
    }
}
