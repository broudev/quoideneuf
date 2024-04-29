import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';
import { CommonModule , Location} from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { TransformDatePipe } from '../../customer-pipe/transform-date.pipe';
import { MaterialModule } from '../../material-module';
import { ShortedPipe } from '../../customer-pipe/text-transform/shorted.pipe';
import { NewsCardPlaceholderComponent } from '../../components/placeholder/news-card-placeholder/news-card-placeholder.component';

@Component({
    selector: 'app-news-archives',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        NgxPaginationModule,
        TransformDatePipe,
        MaterialModule,
        NewsCardPlaceholderComponent
    ],
    providers: [TreatmentsRequestService],
    templateUrl: './news-archives.component.html',
    styleUrl: './news-archives.component.css'
})
export class NewsArchivesComponent implements OnInit{

    public key: string = 'quoideneuf@';
    public _archive_data: any = {};
    public _list_article_by_article: any = [];

    p: number = 1;

    constructor(
        private _route_active: ActivatedRoute,
        private _router: Router,
        private _request: TreatmentsRequestService,
        private _location: Location
    ){}

    ngOnInit(){
        this. getArtcilesByArchive();
    }

    returnBack(){
        this._location.back()
    }


    getArtcilesByArchive(){

        let month: any = this._route_active.snapshot.paramMap.get('month');
        let year: any = this._route_active.snapshot.paramMap.get('year');

        this._archive_data = year +'-' + month;


        this._request.getArticlesByArchive(month,year).subscribe(
            {
                next: (response: any)=>{
                    this._list_article_by_article = response;

                },error: (error: any)=>{
                    this.getArtcilesByArchive();
                }
            }
        )
    }



    goToDetailsArticle(data: any){
        localStorage.setItem('article_rfk', JSON.stringify(data.slug));
        localStorage.setItem('article_titre', JSON.stringify(data.titre));



        this._router.navigate(['/web.quoideneuf.detail', data.slug]);
    }

}
