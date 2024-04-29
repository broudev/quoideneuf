import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { NewsByCategoryComponent } from '../../pages/news-by-category/news-by-category.component';
import { NewsDetailsComponent } from '../../pages/news-details/news-details.component';
import { NewsByKeywordsComponent } from '../../pages/news-by-keywords/news-by-keywords.component';
import { NewsArchivesComponent } from '../../pages/news-archives/news-archives.component';
import { NewsMultimediaComponent } from '../../pages/news-multimedia/news-multimedia.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        data: { title: 'Accueil Quoideneuf' }
    },
    {
        path: "category/:slug",
        component: NewsByCategoryComponent,
        data: { title: 'Categorie par article' }
    },
    {
        path: "category/:slug/:rfk_slug",
        component: NewsByCategoryComponent,
        data: { title: 'Categorie par article' }
    },
    {
        path: 'article/:slug',
        component: NewsDetailsComponent,
        data: { title: 'Détail article' }
    },
    {
        path: 'multimedia',
        component: NewsMultimediaComponent,
        data: { title: 'Multimédia' }
    },
    {
        path: 'news-by-keywords/:keyword',
        component: NewsByKeywordsComponent,
        data: { title: "Filtre d'article" }
    },
    {
        path: 'archive-article/:month/:year',
        component: NewsArchivesComponent,
        data: { title: 'Articles Archives' }
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogLayoutRoutingModule { }
