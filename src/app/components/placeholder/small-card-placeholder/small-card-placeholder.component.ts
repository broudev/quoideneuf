import { Component } from '@angular/core';

@Component({
    selector: 'app-small-card-placeholder',
    standalone: true,
    imports: [],
    templateUrl: './small-card-placeholder.component.html',
    styleUrl: './small-card-placeholder.component.css'
})
export class SmallCardPlaceholderComponent {
    public loading_small_card = new Array(8);
}
