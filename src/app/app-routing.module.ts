import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent }          from './app.component';
import { DoorComponent }         from './door/door.component';
import { AdaListComponent }      from './door/ada-list.component';
import { ProblemListComponent }  from './problem/problem-list.component';
import { PageNotFoundComponent } from './page_not_found/page-not-found.component';
import { SearchComponent }       from './search/search.component';
import { ProblemComponent }      from './problem/problem.component';
import { AddProblemComponent }   from './problem/add-problem.component';
import { AddDoorComponent }      from "./door/add-door.component";
import { AdaResetComponent }     from './ada_reset/ada-reset.component';
import { LogoutComponent }     from './logout/logout.component';

// more specific routes should be placed above less specific routes (first match wins)
const appRoutes: Routes = [
    {
        path: 'door/:id',
        component: DoorComponent
    },
    {
        path: 'doors',
        component: AdaListComponent
    },
    {
        path: 'new-door',
        component: AddDoorComponent
    },
    {
        path: 'problem/:id',
        component: ProblemComponent
    },
    {
        path: 'problems',
        component: ProblemListComponent
    },
    {
        path: 'new-problem',
        component: AddProblemComponent
    },
    {
        path: 'ada-reset',
        component: AdaResetComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: '',
        component: SearchComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
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
