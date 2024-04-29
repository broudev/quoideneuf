import { Component } from '@angular/core';

@Component({
    selector: 'app-card-archive-placeholder',
    standalone: true,
    imports: [],
    templateUrl: './card-archive-placeholder.component.html',
    styleUrl: './card-archive-placeholder.component.css'
})
export class CardArchivePlaceholderComponent {

    public loading_archive_card = new Array(12);
}
