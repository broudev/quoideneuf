import { Component, Inject, OnInit, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { CommonModule, IMAGE_CONFIG, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';
import { MaterialModule } from '../../material-module';
import { TransformDatePipe } from '../../customer-pipe/transform-date.pipe';

import { UneInfoComponent } from '../../components/une-info/une-info.component';
import { PopularInfoComponent } from '../../components/popular-info/popular-info.component';
import { NewsCardPlaceholderComponent } from '../../components/placeholder/news-card-placeholder/news-card-placeholder.component';
import { SmallCardPlaceholderComponent } from '../../components/placeholder/small-card-placeholder/small-card-placeholder.component';
import { PolitiqueInfoComponent } from '../../components/politique-info/politique-info.component';
import { ArchiveInfoComponent } from '../../components/archive-info/archive-info.component';
import { EconomieInfoComponent } from '../../components/economie-info/economie-info.component';
import { MediaNewsComponent } from '../../components/media-news/media-news.component';
import { CardArchivePlaceholderComponent } from '../../components/placeholder/card-archive-placeholder/card-archive-placeholder.component';
import { FormsModule } from '@angular/forms';

const bannerKey = makeStateKey<{banner_data: any}>('banner_data');
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        MediaNewsComponent,
        RouterModule,
        FormsModule,
        MaterialModule,
        TransformDatePipe,
        UneInfoComponent,
        PopularInfoComponent,
        NewsCardPlaceholderComponent,
        SmallCardPlaceholderComponent,
        PolitiqueInfoComponent,
        ArchiveInfoComponent,
        EconomieInfoComponent,
        SmallCardPlaceholderComponent,
        CardArchivePlaceholderComponent
    ],
    providers: [TreatmentsRequestService],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


    public other_rubrique_list: any = [];
    public show: number = 2;

    public banner_url: string = '';

    public screenWidth!: number;
    public screenHeight!: number;
    public search: any;

    public filter_news_data: any = [];


    constructor(
        private _request: TreatmentsRequestService,
        private _router: Router,
        @Inject(PLATFORM_ID) private platformId: Object,
        private _transferState:TransferState,


    ) {
        if (isPlatformBrowser(this.platformId)) {
            this.screenWidth = window.innerWidth;
            window.onresize = () => {
                this.screenWidth = window.innerWidth;
            };
        }


    }
    ngOnInit() {


        this.getBanner();
    }



    getBanner(){

        if(isPlatformServer(this.platformId)){
            this._request.getOtherBanner().subscribe(
                {
                    next: (response: any)=>{
                        this.banner_url = response.banner_url;
                    },error: (error: any)=>{
                    }
                })
        }else if(isPlatformBrowser(this.platformId)){
            this._request.getOtherBanner().subscribe(
            {
                next: (response: any)=>{
                    this.banner_url = response.banner_image;

                    //console.log(this.banner_url);
                },error: (error: any)=>{
                }
            })
        }

    }
}
