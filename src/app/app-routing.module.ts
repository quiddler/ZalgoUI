import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomePage }              from './pages/HomePage';
import { SearchPage }              from './pages/SearchPage';
import { LogoutPage }              from './pages/LogoutPage';

// more specific routes should be placed above less specific routes (first match wins)
const appRoutes: Routes = [
    {
        path: 'search',
        component: SearchPage
    },
    {
        path: 'logout',
        component: LogoutPage
    },
    {
        path: '',
        component: HomePage
    },
    {
        path: '**',
        component: HomePage
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
