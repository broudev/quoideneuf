import { Component, Inject, LOCALE_ID, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { TreatmentsRequestService } from './services/treatments/treatments-request.service';
import { isPlatformBrowser, registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { BlogLayoutModule } from './layouts/blog-layout/blog-layout.module';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
import { MaterialModule } from './material-module';
import { PopupDialogComponent } from './dialogs/popup-dialog/popup-dialog.component';
import { HttpClientModule } from '@angular/common/http';



@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        BlogLayoutModule,
        NgxUiLoaderModule,
        MaterialModule,
        MatDialogClose
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'fr-FR' },
        HttpClientModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    title = 'blog';

    public myThem: any = '';



    constructor(
        private _traitement: TreatmentsRequestService,
        private _router: Router,
        private _titleService: Title,
        private _activatedRoute: ActivatedRoute,
        private _dialogs: MatDialog,
        @Inject(PLATFORM_ID) private platformId: Object
    ){
        if (isPlatformBrowser(this.platformId)) {
            this.myThem = localStorage.getItem('theme');

            //console.log("Blog layout on appCom constructor")
        }

        registerLocaleData(fr.default);
    }

    ngOnInit(): void {
        this._router.events.pipe(
            filter(event => event instanceof NavigationEnd),
        ).subscribe(() => {

            let rt = this.getChild(this._activatedRoute)

            rt.data.subscribe((data: any) => {
                this._titleService.setTitle(data.title);
            })
        })
        //console.log("Blog layout on appCom ngOnInit")

        if (isPlatformBrowser(this.platformId)) {
            this.openPopUp();

        }


    }


    openPopUp(){
        this._dialogs.open(PopupDialogComponent, {
            width: 'auto'
        })
    }



    getChild(activatedRoute: ActivatedRoute): any {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        } else {
            return activatedRoute;
        }

    }



}
