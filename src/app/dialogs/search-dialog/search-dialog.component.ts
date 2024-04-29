import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material-module';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
    selector: 'app-search-dialog',
    standalone: true,
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        RouterModule,
        NgxPaginationModule,
    ],
    templateUrl: './search-dialog.component.html',
    styleUrl: './search-dialog.component.css'
})
export class SearchDialogComponent implements OnInit {

    public search: any;

    public _search_data: any = [];

    public item_length: number = 0;
    public p: number = 1;
    public loading: boolean = false;

    constructor(
        private _request: TreatmentsRequestService,
        private _router: Router,
        private _dialogRef: MatDialogRef<SearchDialogComponent>,
    ){}


    ngOnInit(): void {

    }

    goToDetailNews(new_slug: string) {

        this._router.navigate(['/article', new_slug]);
        this._dialogRef.close()
    }

    searchInTable() {

        this.loading = true;
        this._request.filterByQuery(this.search).subscribe({

            next: (response: any) => {
                setTimeout(() => {
                    this._search_data = response
                    this.item_length = this._search_data.length
                    this.loading = false;
                }, 500);
            },
            error: (error: any) => {
                if (error.status == 401) {
                    console.log(error)

                }
            }
        });
    }
}
//
//this._router.navigate(['/web.quoideneuf.detail', data.slug]);
