import { CommonModule, DOCUMENT, Location, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { DomSanitizer, Meta, Title, } from '@angular/platform-browser';
import { MaterialModule } from '../../material-module';
import { TransformDatePipe } from '../../customer-pipe/transform-date.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShortedPipe } from '../../customer-pipe/text-transform/shorted.pipe';
import { SeoService } from '../../services/seo/seo.service';




@Component({
    selector: 'app-news-details',
    standalone: true,
    imports: [
        CommonModule,
        ShareButtonsModule,
        ShareIconsModule,
        FontAwesomeModule,
        MaterialModule,
        TransformDatePipe,
        CarouselModule,
        RouterModule,
        ShortedPipe

    ],
    templateUrl: './news-details.component.html',
    styleUrl: './news-details.component.css'
})
export class NewsDetailsComponent implements OnInit {

    //faFacebook = faFacebook;
    public key: string = 'quoideneuf@';
    public url: string = '';
    public show: number = 3;
    public author: string = "";
    public date: any = new Date();
    public contents: any = "";
    public titre_decode: any = "";
    public title: any = "";
    public legend: string = "";
    public lead: any = "";
    public searchData: any[] = [];
    public isSearching: boolean = false;
    public list_genre: any[] = [];
    public list_rubrique: any[] = [];
    public list_article_similar: any[] = [];
    public genre_id!: number;
    public rubrique: string = "";
    public rubrique_rfk: string = "";
    public media_url: string = "";
    public flag: string = "";

    public screenWidth: number = 0;
    public screenHeight: number = 0;
    public counter: number = 0;
    public is_only_open: number = 1;
    public like_counter: number = 0;
    public dislike_counter: number = 0;
    public new_scroll_position: number = 0;
    public last_scroll_position: number = 0;
    public base_url: string = '';

    public customOptions2: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        autoWidth: true,
        dots: false,
        navSpeed: 700,

        navText: ['', ''],
        responsive: {
            0: {
                items: 1,
            },
            940: {
                items: 2,
            }
        },
        nav: false,
        autoplay: true,
        autoplayHoverPause: true
    }

    public _liste_similar_article: any[] = [];



    public list_news_rubrique: any = [];
    public list_others_rubrique: any = [];

    constructor(
        private _request: TreatmentsRequestService,
        private _activatedRoute: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private _titleService: Title,
        //private: _linkService: Link,
        private _location: Location,
        private _seoService: SeoService,
        @Inject(DOCUMENT) private document: any,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        if (isPlatformBrowser(this.platformId) || isPlatformServer(this.platformId) ) {
            this.base_url  = this.document.location.href;
            this.url = this.document.location.href;

            this._activatedRoute.paramMap.subscribe((params: any) => {

                let slug: any = this._activatedRoute.snapshot.paramMap.get('slug');
                this._request.getSingleArticle(slug).subscribe(
                    {
                        next: (response: any) => {
                            console.log(response)
                            const data = response;
                            this._titleService.setTitle(data.titre)
                            this.title = data.titre;
                            this.lead = data.lead;
                            this.media_url = data.media_url;
                            this.flag = data.flag;
                            this.contents = this.sanitizer.bypassSecurityTrustHtml(data.contenus);
                            this.rubrique = data.rubrique;
                            this.author = data.author;
                            this.date = data.created_at;
                            //console.log(response);
                            // let contents = data.contenus;
                            this.counter = data.counter;
                            this._seoService.setMetaTags(this.title, this.base_url, this.lead, this.media_url  );
                            this.getSimilarArticle(data.slug, data.rubrique_id);
                        }, error: (error: any) =>{
                            // console.log(error); return
                        }
                });
            })

            //console.log(this.base_url);
        }




    }

    ngOnInit() {
        let slug: any = this._activatedRoute.snapshot.paramMap.get('slug');

        this._request.getSingleArticle(slug).subscribe(
            {
                next: (response: any) => {
                    //console.log(response)
                    const data = response;
                    this._titleService.setTitle(data.titre)
                    this.title = data.titre;
                    this.lead = data.lead;
                    this.media_url = data.media_url;
                    this.flag = data.flag;
                    this.contents = this.sanitizer.bypassSecurityTrustHtml(data.contenus);
                    this.rubrique = data.rubrique;
                    this.author = data.author;
                    this.date = data.created_at;
                    //console.log(response);
                    // let contents = data.contenus;
                    this.counter = data.counter;
                    this._seoService.setMetaTags(this.title, this.base_url, this.lead, this.media_url  );
                    this.getSimilarArticle(data.slug, data.rubrique_id);
                }, error: (error: any) =>{
                    // console.log(error); return
                }
        });
        this.getRubrique();


    }

    returnBack(){
        this._location.back()
    }

    /**
    // get current article details
    getDetail() {

        let slug: any = this._activatedRoute.snapshot.paramMap.get('slug');

        this._request.getSingleArticle(slug).subscribe(
            {
                next: (response: any) => {
                    //console.log(response)
                    const data = response;
                    this._titleService.setTitle(data.titre)
                    this.title = data.titre;
                    this.lead = data.lead;
                    this.media_url = data.media_url;
                    this.flag = data.flag;
                    this.contents = this.sanitizer.bypassSecurityTrustHtml(data.contenus);
                    this.rubrique = data.rubrique;
                    this.author = data.author;
                    this.date = data.created_at;
                    //console.log(response);

                    // let contents = data.contenus;
                    this.counter = data.counter;



                    //this.updateMetaTags();
                    //this.getSimilarArticle(data.slug, data.rubrique_id);
                }, error: (error: any) =>{
                    // console.log(error); return
                }
        });
    }*/




    getRubrique()
    {
        this._request.getAllRubrique().subscribe(
            {
                next:(response: any) => {
                    this.list_news_rubrique = response.news_rubrique;
                    this.list_others_rubrique = response.other_news_rubriques;
                }
            }
        )
    }

    getSimilarArticle(item_rfk: any, rubrique_id: any){
        const data = {
            rfk: item_rfk,
            rubrique_id: rubrique_id
        };
        this._request.getDetailsSimilarArticle(data).subscribe(
            {
                next:(response: any) => {
                    this._liste_similar_article = response;
                },error: (error: any) =>{

                }
            }
        );
    }




}
