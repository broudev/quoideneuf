import { Component, Inject, Input, OnInit, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { TransformDatePipe } from '../../customer-pipe/transform-date.pipe';
import { MaterialModule } from '../../material-module';
import { RouterModule } from '@angular/router';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { NewsCardPlaceholderComponent } from '../placeholder/news-card-placeholder/news-card-placeholder.component';


const politiqueNewsKey = makeStateKey<{politique_news_data: any}>('politique_news_data');


@Component({
    selector: 'app-politique-info',
    standalone: true,
    imports: [
        TransformDatePipe,
        MaterialModule,
        RouterModule,
        NewsCardPlaceholderComponent
    ],
    providers: [TreatmentsRequestService],
    templateUrl: './politique-info.component.html',
    styleUrl: './politique-info.component.css'
})
export class PolitiqueInfoComponent implements OnInit {

    public politique_list: any[] = [];

    constructor(
        private _traitement: TreatmentsRequestService,
        @Inject(PLATFORM_ID) private platformId: Object,
        private _transferState:TransferState
    ) {}


    ngOnInit(){

        if(isPlatformServer(this.platformId)){
            this._traitement.getPolitiqueNews().subscribe(
            {
                next: (response: any)=>{
                    this._transferState.set(politiqueNewsKey, response);

                    this.politique_list = response;
                },error: (error: any)=>{
                }
            })
        }else if(isPlatformBrowser(this.platformId)){
            this._traitement.getPolitiqueNews().subscribe(
                {
                    next: (response: any)=>{
                        this._transferState.set(politiqueNewsKey, response);

                        this.politique_list = response;
                    },error: (error: any)=>{
                }
            })
        }
    }


}

