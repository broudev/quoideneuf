import { Component, Inject, OnInit, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router } from '@angular/router';
import { TransformDatePipe } from '../../customer-pipe/transform-date.pipe';


const archiveNewsKey = makeStateKey<{ archive_news_data: any }>('archive_news_data');

@Component({
    selector: 'app-archive-info',
    standalone: true,
    imports: [
        CommonModule,
        TransformDatePipe
    ],
    providers: [TreatmentsRequestService],
    templateUrl: './archive-info.component.html',
    styleUrl: './archive-info.component.css'
})
export class ArchiveInfoComponent implements OnInit {

    public _list_archive: any[] = [];

    constructor(
        private _traitement: TreatmentsRequestService,
        @Inject(PLATFORM_ID) private platformId: Object,
        private _transferState: TransferState,
        private _router: Router,
    ) { }


    ngOnInit() {

        if (isPlatformServer(this.platformId)) {
            this._traitement.getArchiveNews().subscribe(
            {
                next: (response: any) => {
                    this._transferState.set(archiveNewsKey, response);

                        this._list_archive = response;
                    }, error: (error: any) => {
                }
            })
        } else if (isPlatformBrowser(this.platformId)) {
            this._traitement.getArchiveNews().subscribe(
            {
                next: (response: any) => {
                    this._transferState.set(archiveNewsKey, response);

                        this._list_archive = response;
                    }, error: (error: any) => {
                }
            })
        }
    }


    goToArchiveArticles(data: any){

        console.log(data);
        this._router.navigate(['/archive-article', data.month, data.year]);
    }

}
