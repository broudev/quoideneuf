import { Component, Inject, OnInit, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material-module';
import { TransformDatePipe } from '../../customer-pipe/transform-date.pipe';


const economieNewsKey = makeStateKey<{economie_news_data: any}>('economie_news_data');

@Component({
    selector: 'app-economie-info',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        TransformDatePipe
    ],
    providers: [TreatmentsRequestService],
    templateUrl: './economie-info.component.html',
    styleUrl: './economie-info.component.css'
})
export class EconomieInfoComponent implements OnInit {

    public economie_list: any[] = [];

    constructor(
        private _traitement: TreatmentsRequestService,
        @Inject(PLATFORM_ID) private platformId: Object,
        private _transferState: TransferState
    ) { }


    ngOnInit() {

        if (isPlatformServer(this.platformId)) {
            this._traitement.getEconomieNews().subscribe(
                {
                    next: (response: any) => {
                        this._transferState.set(economieNewsKey, response);

                        this.economie_list = response;
                    }, error: (error: any) => {
                    }
                })
        } else if (isPlatformBrowser(this.platformId)) {
            this._traitement.getEconomieNews().subscribe(
            {
                next: (response: any) => {
                    this._transferState.set(economieNewsKey, response);

                    this.economie_list = response;
                }, error: (error: any) => {
                }
            })
        }
    }

}
