import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, IMAGE_CONFIG, registerLocaleData } from '@angular/common';

import { BlogLayoutRoutingModule } from './blog-layout-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material-module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    "bgsColor": "red",
    "bgsOpacity": 0.5,
    "bgsPosition": "bottom-right",
    "bgsSize": 60,
    "bgsType": "ball-spin-clockwise",
    "blur": 5,
    "delay": 0,
    "fastFadeOut": true,
    "fgsColor": "red",
    "fgsPosition": "center-center",
    "fgsSize": 60,
    "fgsType": "ball-spin-clockwise",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "assets/angular.png",
    "masterLoaderId": "master",
    "overlayBorderRadius": "0",
    "overlayColor": "rgba(40, 40, 40, 0.8)",
    "pbColor": "#233266",
    "pbDirection": "ltr",
    "pbThickness": 3,
    "hasProgressBar": true,
    "text": "Chargement de données en cours",
    "textColor": "#FFFFFF",
    "textPosition": "center-center",
    "maxTime": -1,
    "minTime": 5000

};


@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        CarouselModule,
        HttpClientModule,
        BlogLayoutRoutingModule,
        NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
        NgxUiLoaderHttpModule,
        NgxUiLoaderRouterModule,
    ],

    providers: [
        {
            provide: IMAGE_CONFIG,
            useValue: {
                disableImageSizeWarning: false,
                disableImageLazyLoadWarning: false
            },
        },
        TreatmentsRequestService
    ],
})
export class BlogLayoutModule {
    constructor() {



    }
}
