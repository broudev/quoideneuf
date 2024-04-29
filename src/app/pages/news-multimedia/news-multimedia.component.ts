import { CommonModule,Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { TransformDatePipe } from '../../customer-pipe/transform-date.pipe';
import { MaterialModule } from '../../material-module';
import { RouterModule } from '@angular/router';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';
import { YouTubePlayer } from '@angular/youtube-player';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-news-multimedia',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        NgxPaginationModule,
        TransformDatePipe,
        MaterialModule,
        YouTubePlayer
    ],
    templateUrl: './news-multimedia.component.html',
    styleUrl: './news-multimedia.component.css'
})
export class NewsMultimediaComponent implements OnInit {

    public media_list: any = [];
    public other_rubrique_list: any = [];
    public p: number = 1;
    

    constructor(
        private _request: TreatmentsRequestService,
        private _sanitizer: DomSanitizer,
        private _location: Location
    ) { }

    ngOnInit() {
        this.getMedia();
        
        this.getOtherRubrique();
    }


    returnBack(){
        this._location.back()
    }
    getMedia() {
        this._request.getAllMedia().subscribe((response: any) => {
            this.media_list = response;
            this.media_list.forEach((element: any) => {
                this.media_list.description = this._sanitizer.bypassSecurityTrustHtml(element.description)
            });
        });
    }

    getOtherRubrique() {
        this._request.getOtherRubrique().subscribe((response: any) => {
            this.other_rubrique_list = response;
        });
    }

    
}
