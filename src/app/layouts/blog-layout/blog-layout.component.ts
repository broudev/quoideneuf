import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { LocationStrategy, NgOptimizedImage, isPlatformBrowser, Location, isPlatformServer } from '@angular/common';
import { MaterialModule } from '../../material-module';
import { HomeComponent } from '../../pages/home/home.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { KeywordEventsComponent } from '../../components/keyword-events/keyword-events.component';
import { MatDialog } from '@angular/material/dialog';
import { SearchDialogComponent } from '../../dialogs/search-dialog/search-dialog.component';

@Component({
    selector: 'app-blog-layout',
    standalone: true,
    imports: [
        MaterialModule,
        RouterModule,
        HomeComponent,
        NgOptimizedImage,
        CarouselModule,
        KeywordEventsComponent
    ],
    templateUrl: './blog-layout.component.html',
    styleUrl: './blog-layout.component.css'
})
export class BlogLayoutComponent implements OnInit {

    public banner_url: any = '';
    public list_news_rubrique: any = [];
    public list_others_rubrique: any = [];
    public myThem: any = '';
    public isPopState = false;
    public screenWidth!: number;
    public screenHeight!: number;

    public is_navigated: boolean = false;
    public is_play: boolean = false;

    public _list_events: any = [];


    public customerEventListOptions: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        autoWidth: true,
        dots: false,
        navSpeed: 700,
        autoplay: true,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1,
            },
            940: {
                items: 6,
            }
        },
        nav: false,
    }



    constructor(
        private _traitement: TreatmentsRequestService,
        private _router: Router,
        private _route_active: ActivatedRoute,
        private _location: Location,
        private locStrat: LocationStrategy,
        @Inject(PLATFORM_ID) private platformId: Object,
        private _dialogs: MatDialog
    ){
        if (isPlatformBrowser(this.platformId)) {
            this.myThem = localStorage.getItem('theme');
            this.screenWidth = window.innerWidth;
            window.onresize = () => {
                this.screenWidth = window.innerWidth;
            };

            //console.log("Blog layout constructor")

            this.locStrat.onPopState(() => {
                this.isPopState = true;
            });
            this._router.events.subscribe(event => {
                // Scroll to top if accessing a page, not via browser history stack
                if (event instanceof NavigationEnd && !this.isPopState) {
                    window.scrollTo(0, 0);
                    this.isPopState = false;
            }
                // Ensures that isPopState is reset
                if (event instanceof NavigationEnd) {
                    this.isPopState = false;
                }
            });
        }
    }




    ngOnInit(): void {
        this.getRubrique();
        this.getBanner();


        //console.log("Blog layout on ngOnInit")

    }


    switchTheme(word: string){}

    getRubrique()
    {
        this._traitement.getAllRubrique().subscribe(
            {
                next:(response: any) => {

                    //console.log(response);
                    this.list_news_rubrique = response.news_rubrique;
                    this.list_others_rubrique = response.other_news_rubriques;

                }, error: (error: any)=>{
                    console.log(error)
                }
            }
        )
    }

    getBanner(){
        this._traitement.getBanner().subscribe(
            {
                next: (response: any)=>{
                    this.banner_url = response.banner_image;

                    //console.log(this.banner_url)
                }
            }
        );
    }


    


    searchOpenDialog() {

        const dialog = this._dialogs.open(SearchDialogComponent, {
            panelClass: 'fullscreen-dialog'
        })

        dialog.afterClosed().subscribe({
            next: (val) => {
                if (val == "confirm") {

                    //this.deleteEmployes(slug)

                }
            },
        });
    }







}
