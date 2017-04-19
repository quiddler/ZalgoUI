import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { LogoutPage } from './pages/LogoutPage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

//------------------------------------------------------------------------------
//                             Services
//------------------------------------------------------------------------------
import { ZalgoBus } from './bus/bus.service';
import { ZalgoCache } from './cache/cache.service';
import { ObjectSearcher } from './ui_components/search/object-searcher.service';
import { ErrorHandler } from './error_handler/error-handler.service';


//------------------------------------------------------------------------------
//                             UI Components
//------------------------------------------------------------------------------
import { ZalgoDropDown } from './ui_components/drop_down/zalgo-drop-down';
import { ZalgoHeaderComponent } from './ui_components/header/header';
import { ZalgoFooterComponent } from "./ui_components/footer/footer";
import { ZalgoCardComponent } from "./ui_components/card/card";
import { ZalgoTabGroup } from "./ui_components/tab_group/tab-group";
import { ZalgoTab } from "./ui_components/tab/tab";
import { ZalgoSelect } from "./ui_components/select/select";
import { ZalgoPageComponent } from "./ui_components/page/page";
import { ZalgoFader } from "./ui_components/fader/zalgo-fader";

@NgModule({
    declarations: [
        AppComponent,
        HomePage,
        SearchPage,
        LogoutPage,
        ZalgoDropDown,
        ZalgoHeaderComponent,
        ZalgoFooterComponent,
        ZalgoCardComponent,
        ZalgoTabGroup,
        ZalgoTab,
        ZalgoSelect,
        ZalgoPageComponent,
        ZalgoFader
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        ZalgoBus,
        ZalgoCache,
        ObjectSearcher,
        ErrorHandler
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap: [AppComponent]
})
export class AppModule { }
