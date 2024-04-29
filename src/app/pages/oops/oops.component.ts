import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
    selector: 'app-oops',
    standalone: true,
    imports: [],
    templateUrl: './oops.component.html',
    styleUrl: './oops.component.css'
})
export class OopsComponent implements OnInit {

    constructor(
        private _location: Location
    ) { }

    ngOnInit() {

    }

    goToBack() {
        this._location.back();
    }
}
