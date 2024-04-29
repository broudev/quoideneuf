import { Component, Inject, OnInit, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { TreatmentsRequestService } from '../../services/treatments/treatments-request.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LocationStrategy, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { MaterialModule } from '../../material-module';

const eventNewsKey = makeStateKey<{event_news_data: any}>('event_news_data');


@Component({
    selector: 'app-keyword-events',
    standalone: true,
    imports: [
        MaterialModule,
        RouterModule,
    ],
    providers: [TreatmentsRequestService],
    templateUrl: './keyword-events.component.html',
    styleUrl: './keyword-events.component.css'
})
export class KeywordEventsComponent implements OnInit {

    public _list_events: any = [];

    public event_keys = new Array(18);

    constructor(
        private _traitement: TreatmentsRequestService,
        private _router: Router,
        @Inject(PLATFORM_ID) private platformId: Object,
        private _transferState:TransferState
    ) {
        if (isPlatformBrowser(this.platformId)) {


            const tabsBox: any = document.querySelector(".tabs-box"),
            allTabs = tabsBox.querySelectorAll(".tab"),
            arrowIcons: any = document.querySelectorAll(".icon i");

            let isDragging = false;

            const handleIcons = (scrollVal: any) => {
                let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
                arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
                arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
            }

            arrowIcons.forEach((icon: any) => {
                icon.addEventListener("click", () => {
                    let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
                    handleIcons(scrollWidth);
                });
            });

            allTabs.forEach((tab: any) => {
                tab.addEventListener("click", () => {
                    tabsBox.querySelector(".active").classList.remove("active");
                    tab.classList.add("active");
                });
            });

            const dragging = (e: any) => {
                if (!isDragging) return;
                tabsBox.classList.add("dragging");
                tabsBox.scrollLeft -= e.movementX;
                handleIcons(tabsBox.scrollLeft)
            }

            const dragStop = () => {
                isDragging = false;
                tabsBox.classList.remove("dragging");
            }

            tabsBox.addEventListener("mousedown", () => isDragging = true);
            tabsBox.addEventListener("mousemove", dragging);
            document.addEventListener("mouseup", dragStop);


        }
    }
    ///web.quoideneuf.news-by-keywords'

    ngOnInit() {
        if(isPlatformServer(this.platformId)){
            this._traitement.getEventsListUne().subscribe(
            {
                next: (response: any)=>{
                    this._transferState.set(eventNewsKey, response);

                    this._list_events = response;
                },error: (error: any)=>{
                }
            })
        }else if(isPlatformBrowser(this.platformId)){
            this._traitement.getEventsListUne().subscribe(
                {
                    next: (response: any)=>{
                        this._transferState.set(eventNewsKey, response);

                        this._list_events = response;
                    },error: (error: any)=>{
                    }
                })
        }
    }

    gotToEventsNews(event_data: any){

        this._router.navigate(['/news-by-keywords', event_data.keywords]);
    }




}
