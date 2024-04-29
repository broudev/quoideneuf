import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd } from '@angular/router';
import { Router } from 'express';
import { filter } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SeoService {
    constructor(private _meta: Meta, private title: Title, ) {

    }

    setMetaTags(title: string, base_url: string, lead: string, media_url: string): void {

        this.title.setTitle(title);
        // Update Open Graph meta tags
        this._meta.updateTag({ property: 'og:title', content: title });
        this._meta.updateTag({ name: 'title', content: title });
        this._meta.updateTag({ property: 'og:description', content: lead });
        this._meta.updateTag({ name: 'description', content: lead });
        this._meta.updateTag({ property: 'og:image', content: media_url });
        this._meta.updateTag({ property: 'og:url', content: base_url }); // Use the current URL
        this._meta.updateTag({ rel: 'canonical', href: base_url });
        // this._meta.updateTag({ property: 'og:url', content: this.url }); // Use the current URL

        /* Update Twitter Card meta tags (if needed) */
        this._meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this._meta.updateTag({ name: 'twitter:title', content: title });
        this._meta.updateTag({ name: 'twitter:description', content: title });
        this._meta.updateTag({ name: 'twitter:image', content: media_url });
        this._meta.updateTag({ name: 'twitter:site', content: base_url });
        // Add more meta tags as needed
    }
}
