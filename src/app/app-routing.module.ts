import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent }          from './app.component';

// more specific routes should be placed above less specific routes (first match wins)
const appRoutes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: '**',
        component: AppComponent
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
