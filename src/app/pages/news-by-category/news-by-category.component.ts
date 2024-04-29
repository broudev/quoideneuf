import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { TransformDatePipe } from '../../customer-pipe/transform-date.pipe';
import { MaterialModule } from '../../material-module';
import { CommonModule, Location, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ShortedPipe } from '../../customer-pipe/text-transform/shorted.pipe';
import { HttpClient } from '@angular/common/http';
import { NewsCardPlaceholderComponent } from '../../components/placeholder/news-card-placeholder/news-card-placeholder.component';

@Component({
    selector: 'app-news-by-category',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        NgxPaginationModule,
        TransformDatePipe,
        MaterialModule,
        ShortedPipe,
        NewsCardPlaceholderComponent
    ],
    providers: [HttpClient],
    templateUrl: './news-by-category.component.html',
    styleUrl: './news-by-category.component.css'
})
export class NewsByCategoryComponent implements OnInit {

    public key: string = 'quoideneuf@';
    public article_list: any = [];
    public current_rubrique: string = '';
    public other_rubrique_list: any = [];
    public p: number = 1;
    public titre_decode: any = "";


    constructor(
        private _request: TreatmentsRequestService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _location: Location,
        @Inject(PLATFORM_ID) private platformId: Object,
    ) {
        this._activatedRoute.paramMap.subscribe((params: any) => {
            this.getArticleByCategory();
        })
    }

    ngOnInit() {
        this.getArticleByCategory();
        this.getOtherRubrique();

        if (isPlatformServer(this.platformId)) {
            let _rfk_slug: any = this._activatedRoute.snapshot.paramMap.get('rfk_slug');

            if(_rfk_slug != null){
                let slug: any = this._activatedRoute.snapshot.paramMap.get('slug');
                //const decrypt_rfk = CryptoJS.AES.decrypt(rfk, this.key).toString(CryptoJS.enc.Utf8);
                //const _rfk = JSON.parse(decrypt_rfk);

                this._request.getArticleByCategory(slug).subscribe((response: any) => {
                    this.article_list = response.article;

                    this.current_rubrique = response.categorie;
                });
            }else{
                let slug: any = this._activatedRoute.snapshot.paramMap.get('slug');
                this._request.getArticleByCategory(slug).subscribe((response: any) => {
                    this.article_list = response.article;

                    this.current_rubrique = response.categorie;
                });
            }
        } else if (isPlatformBrowser(this.platformId)) {
            //const une_new_list_data: any = this._transferState.get<{une_news_data:any}>(uneNewsKey,{une_news_data:""});
            //this._list_une_news = une_new_list_data;

            let _rfk_slug: any = this._activatedRoute.snapshot.paramMap.get('rfk_slug');

            if(_rfk_slug != null){
                let slug: any = this._activatedRoute.snapshot.paramMap.get('slug');
                //const decrypt_rfk = CryptoJS.AES.decrypt(rfk, this.key).toString(CryptoJS.enc.Utf8);
                //const _rfk = JSON.parse(decrypt_rfk);

                this._request.getArticleByCategory(slug).subscribe((response: any) => {
                    this.article_list = response.article;

                    this.current_rubrique = response.categorie;
                });
            }else{
                let slug: any = this._activatedRoute.snapshot.paramMap.get('slug');
                this._request.getArticleByCategory(slug).subscribe((response: any) => {
                    this.article_list = response.article;

                    this.current_rubrique = response.categorie;
                });
            }
        }
    }

    returnBack(){
        this._location.back()
    }


    getArticleByCategory() {



    }

    getOtherRubrique() {

        this._request.getOtherRubrique().subscribe((response: any) => {
            this.other_rubrique_list = response;
        });
    }

    

    goToDetailsArticle(data: any){
        localStorage.setItem('article_rfk', JSON.stringify(data.slug));
        localStorage.setItem('article_titre', JSON.stringify(data.titre));
        this._router.navigate(['/web.quoideneuf.detail', data.slug]);
    }
}
