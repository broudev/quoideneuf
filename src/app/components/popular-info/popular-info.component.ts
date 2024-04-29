import { Component, Inject, Input, OnInit, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { ShortedPipe } from '../../customer-pipe/text-transform/shorted.pipe';
import { TransformDatePipe } from '../../customer-pipe/transform-date.pipe';
import { MaterialModule } from '../../material-module';
import { Router, RouterModule } from '@angular/router';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { SmallCardPlaceholderComponent } from '../placeholder/small-card-placeholder/small-card-placeholder.component';


const popularNewsKey = makeStateKey<{popular_news_data: any}>('popular_news_data');


@Component({
    selector: 'app-popular-info',
    standalone: true,
    imports: [
        ShortedPipe,
        TransformDatePipe,
        RouterModule,
        SmallCardPlaceholderComponent
    ],
    providers: [TreatmentsRequestService],
    templateUrl: './popular-info.component.html',
    styleUrl: './popular-info.component.css'
})
export class PopularInfoComponent implements OnInit {

    public _list_popular_news: any[] = [];
    constructor(
        private _traitement: TreatmentsRequestService,
        @Inject(PLATFORM_ID) private platformId: Object,
        private _transferState:TransferState
    ) {}

    ngOnInit(){

        if(isPlatformServer(this.platformId)){
            this._traitement.getPopularNews().subscribe(
            {
                next: (response: any)=>{
                    this._transferState.set(popularNewsKey, response);
                    this._list_popular_news = response;
                },error: (error: any)=>{
                }
            })
        }else if(isPlatformBrowser(this.platformId)){
            this._traitement.getPopularNews().subscribe(
                {
                    next: (response: any)=>{
                        this._transferState.set(popularNewsKey, response);
                        this._list_popular_news = response;
                    },error: (error: any)=>{
                }
            })
        }
    }


}
