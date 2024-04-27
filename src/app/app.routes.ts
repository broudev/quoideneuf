import { Routes } from '@angular/router';
import { BlogLayoutComponent } from './layouts/blog-layout/blog-layout.component';
import { OopsComponent } from './pages/oops/oops.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },

    {
        path: "",
        component: BlogLayoutComponent,
        children: [
            {
                path: "",
                loadChildren: () => import("./layouts/blog-layout/blog-layout.module").then((m) => m.BlogLayoutModule)
            }
        ]
    },
    {
        path: "404-error",
        component: OopsComponent
    },
    // {
    //     path: 'web.qdn.offline',
    //     component:  OfflineComponent,
    //     data: {title: 'Connection perdue'}
    // },
    {
        path: "*",
        redirectTo: "/"
    },
    {
        path: "**",
        redirectTo: "/404-error",
        data: { title: '404 erreur' }
    }

];
