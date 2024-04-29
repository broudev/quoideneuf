import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrlService } from '../api-url.service';

@Injectable({
    providedIn: 'root'
})
export class TreatmentsRequestService {

    public headers: any;


    constructor(
        private _http: HttpClient,
        private _api_url: ApiUrlService
    ) { }


    getHeaders = () => {
        this. headers = { headers: { 'Cache-Control': 'no-cache','Pragma': 'no-cache' } }

        return this.headers;
    }
    // get rubrique header
    getRubrique()
    {
        let url = this._api_url.apiUrl+ "get_frontend_rubrique_quoideneuf";
        return this._http.get(url, this.getHeaders());
    }

    //
    getAllMedia()
    {
        let url = this._api_url.apiUrl+ "get_frontend_media";
        return this._http.get(url, this.getHeaders());
    }
    //
    getOtherRubrique = () =>{
        let url = this._api_url.apiUrl+ "get_frontend_others_rubrique_quoideneuf";
        return this._http.get(url, this.getHeaders());
    }

    //view all article by current category
    getArticleByCategory(slug: string) {
        let url = this._api_url.apiUrl+ "get_frontend_article_with_rubrique/" + slug;
        return this._http.get(url, this.getHeaders());
    }

    // get details articles
    getSingleArticle(slug: string) {
        let url = this._api_url.apiUrl+ "get_frontend_detail_news/"+ slug;
        return this._http.get(url, this.getHeaders());
    }
    //
    getDetailsSimilarArticle = (data: any) =>{
        let url = this._api_url.apiUrl+ "get_frontend_similar_article/"+data.rubrique_id+'/'+data.titre;
        return this._http.get(url, this.getHeaders());
    }
    // get banner from header
    getBanner = () =>{
        let url = this._api_url.apiUrl+ "get_frontend_banner_728X90";
        return this._http.get(url, this.getHeaders());
    }
    // get banner from home
    getOtherBanner = () =>{
        let url = this._api_url.apiUrl+ "get_frontend_banner_1920X309";
        return this._http.get(url, this.getHeaders());
    }
    // get banner from home
    getPopUpBanner = () =>{
        let url = this._api_url.apiUrl+ "get_frontend_banner_1200X1500";
        return this._http.get(url, this.getHeaders());
    }

//*******// *🧤🧤🧤🧤* REQUEST *🧤🧤🧤🧤* //*******//
    // get event slide une liste
    getEventsListUne() {
        let url = this._api_url.apiUrl+ "get_frontend_event_keywords";
        return this._http.get(url, this.getHeaders());
    }
    // get event slide une liste
    getEventsList () {
        let url = this._api_url.apiUrl+ "view_frontend_news/";
        return this._http.get(url, this.getHeaders());
    }
    // get articles by archive
    getArticlesByArchive = (mounth: any, year: any) => {
        let url = this._api_url.apiUrl+ "get_frontend_archive_data/"+mounth+'/'+year;
        return this._http.get(url, this.getHeaders());
    }
    // get articles by keywords
    getListeArticlesByKeywords = (keyword: any) => {
        let url = this._api_url.apiUrl+ "get_frontend_news_by_event_keywords/"+keyword;
        return this._http.get(url, this.getHeaders());
    }
    // get rubrique for navbar
    getAllRubrique = () =>{
        let url = this._api_url.apiUrl+ "get_frontend_news_rubrique";
        return this._http.get(url, this.getHeaders());
    }



    // get news for une
    getAllUneNews() {
        let url = this._api_url.apiUrl+ "get_frontend_une_news_article";
        return this._http.get(url, this.getHeaders());
    }
    getPopularNews() {
        let url = this._api_url.apiUrl+ "get_frontend_popular_article";
        return this._http.get(url, this.getHeaders());
    }
    getPolitiqueNews() {
        let url = this._api_url.apiUrl+ "get_frontend_politique_article";
        return this._http.get(url, this.getHeaders());
    }
    getEconomieNews() {
        let url = this._api_url.apiUrl+ "get_frontend_economie_article";
        return this._http.get(url, this.getHeaders());
    }

    getArchiveNews() {
        let url = this._api_url.apiUrl+ "get_frontend_archive_article";
        return this._http.get(url, this.getHeaders());
    }

    getMediaNews() {
        let url = this._api_url.apiUrl+ "get_frontend_media_news";
        return this._http.get(url, this.getHeaders());
    }

    filterByQuery = (query: string) => {
        const url = this._api_url.apiUrl + 'filter_on_news_with_query/'+query;
        return this._http.get(url, this.getHeaders());
    }


}
