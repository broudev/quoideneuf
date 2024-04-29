import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { RouterModule } from '@angular/router';
import { YouTubePlayer } from '@angular/youtube-player';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';
import { TransformDatePipe } from '../../customer-pipe/transform-date.pipe';

const mediaNewsKey = makeStateKey<{media_news_data: any}>('media_news_data');

@Component({
    selector: 'app-media-news',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        YouTubePlayer,
        TransformDatePipe
    ],
    providers: [TreatmentsRequestService],
    templateUrl: './media-news.component.html',
    styleUrl: './media-news.component.css'
})
export class MediaNewsComponent implements OnInit {

    public media_list: any[] = [];

    constructor(
        private _traitement: TreatmentsRequestService,
        @Inject(PLATFORM_ID) private platformId: Object,
        private _transferState:TransferState
    ) {}


    ngOnInit(){

        if(isPlatformServer(this.platformId)){
            this._traitement.getMediaNews().subscribe(
            {
                next: (response: any)=>{
                    this._transferState.set(mediaNewsKey, response);

                    this.media_list = response;
                },error: (error: any)=>{
                }
            })
        }else if(isPlatformBrowser(this.platformId)){
            this._traitement.getMediaNews().subscribe(
            {
                next: (response: any)=>{
                    this._transferState.set(mediaNewsKey, response);

                    this.media_list = response;
                },error: (error: any)=>{}
            })
        }
    }

}
