import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { TransformDatePipe } from '../../customer-pipe/transform-date.pipe';
import { MaterialModule } from '../../material-module';
import { ShortedPipe } from '../../customer-pipe/text-transform/shorted.pipe';
import { NewsCardPlaceholderComponent } from '../../components/placeholder/news-card-placeholder/news-card-placeholder.component';

@Component({
    selector: 'app-news-by-keywords',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        NgxPaginationModule,
        TransformDatePipe,
        MaterialModule,
        NewsCardPlaceholderComponent
    ],
    templateUrl: './news-by-keywords.component.html',
    styleUrl: './news-by-keywords.component.css'
})
export class NewsByKeywordsComponent implements OnInit{
    public titre_decode: any = "";
    p: number = 1;
    public _list_articles_by_keywords: any = [];
    public keyword: any = '';

    constructor(
        private _request: TreatmentsRequestService,
        private _route_active: ActivatedRoute,
        private _activatedRoute: ActivatedRoute,
        @Inject(PLATFORM_ID) private platformId: Object,
        private _router: Router
    ){
        this._activatedRoute.paramMap.subscribe((params: any) => {
            this.ngOnInit();
        })
    }

    ngOnInit() {
        this.getListeArticlesByKeywords();
        this.keyword = this._route_active.snapshot.paramMap.get('keyword');

        if (isPlatformServer(this.platformId)) {
            let keyword = this._route_active.snapshot.paramMap.get('keyword');
            this._request.getListeArticlesByKeywords(keyword).subscribe(
                {
                    next: (response: any)=>{
                        this._list_articles_by_keywords = response;
                    },
                    error: (response: any)=>{

                    }
                }
            )
        } else if (isPlatformBrowser(this.platformId)) {
            //const une_new_list_data: any = this._transferState.get<{une_news_data:any}>(uneNewsKey,{une_news_data:""});
            //this._list_une_news = une_new_list_data;

            let keyword = this._route_active.snapshot.paramMap.get('keyword');
            this._request.getListeArticlesByKeywords(keyword).subscribe(
                {
                    next: (response: any)=>{
                        this._list_articles_by_keywords = response;
                    },
                    error: (response: any)=>{

                    }
                }
            )
        }
    }

    getListeArticlesByKeywords(){
        let keyword = this._route_active.snapshot.paramMap.get('keyword');
        this._request.getListeArticlesByKeywords(keyword).subscribe(
            {
                next: (response: any)=>{
                    this._list_articles_by_keywords = response;
                },
                error: (response: any)=>{

                }
            }
        )
    }
    goToDetailsArticle(data: any){

        // console.log(data); return
        localStorage.setItem('article_rfk', JSON.stringify(data.slug));
        localStorage.setItem('article_titre', JSON.stringify(data.titre));
        this._router.navigate(['/web.quoideneuf.detail', data.slug]);
    }

    
}
