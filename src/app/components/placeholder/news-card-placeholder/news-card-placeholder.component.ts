import { Component } from '@angular/core';
import { MaterialModule } from '../../../material-module';

@Component({
    selector: 'app-news-card-placeholder',
    standalone: true,
    imports: [MaterialModule],
    templateUrl: './news-card-placeholder.component.html',
    styleUrl: './news-card-placeholder.component.css'
})
export class NewsCardPlaceholderComponent {

    public loading_card = new Array(6);
}
