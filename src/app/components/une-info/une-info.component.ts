import { Component, Inject, OnInit, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { ShortedPipe } from '../../customer-pipe/text-transform/shorted.pipe';
import { TransformDatePipe } from '../../customer-pipe/transform-date.pipe';
import { Router, RouterModule } from '@angular/router';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';
import { MaterialModule } from '../../material-module';
import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { NewsCardPlaceholderComponent } from '../placeholder/news-card-placeholder/news-card-placeholder.component';


const uneNewsKey = makeStateKey<{ une_news_data: any }>('une_news_data');

@Component({
    selector: 'app-une-info',
    standalone: true,
    imports: [
        ShortedPipe,
        TransformDatePipe,
        MaterialModule,
        RouterModule,
        NewsCardPlaceholderComponent
    ],
    providers: [TreatmentsRequestService],
    templateUrl: './une-info.component.html',
    styleUrl: './une-info.component.css'
})
export class UneInfoComponent implements OnInit{


    public _list_une_news: any[] = [];


    constructor(
        private _traitement: TreatmentsRequestService,
        @Inject(PLATFORM_ID) private platformId: Object,
        private _transferState: TransferState,
    ) {
        if (isPlatformServer(this.platformId)) {
            this._traitement.getAllUneNews().subscribe(
                {
                    next: (response: any) => {
                        this._transferState.set(uneNewsKey, response);

                        this._list_une_news = response;

                    }, error: (error: any) => {
                    }
                })
        } else if (isPlatformBrowser(this.platformId)) {
            //const une_new_list_data: any = this._transferState.get<{une_news_data:any}>(uneNewsKey,{une_news_data:""});
            //this._list_une_news = une_new_list_data;

            this._traitement.getAllUneNews().subscribe(
                {
                    next: (response: any) => {

                        this._list_une_news = response;

                    }, error: (error: any) => {
                }
            })
        }
    }

    ngOnInit() {
        if (isPlatformServer(this.platformId)) {
            this._traitement.getAllUneNews().subscribe(
                {
                    next: (response: any) => {
                        this._transferState.set(uneNewsKey, response);

                        this._list_une_news = response;

                    }, error: (error: any) => {
                    }
                })
        } else if (isPlatformBrowser(this.platformId)) {
            //const une_new_list_data: any = this._transferState.get<{une_news_data:any}>(uneNewsKey,{une_news_data:""});
            //this._list_une_news = une_new_list_data;

            this._traitement.getAllUneNews().subscribe(
                {
                    next: (response: any) => {

                        this._list_une_news = response;

                    }, error: (error: any) => {
                }
            })
        }




    }




}
