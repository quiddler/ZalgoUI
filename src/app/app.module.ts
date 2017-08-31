import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ZalgoDropdownFsComponent } from './ui/zalgo-dropdown-fs/dropdown-fs.component';
import { ZalgoDropdownTcComponent } from './ui/zalgo-dropdown-tc/zalgo-dropdown-tc.component';
import { ZalgoTableComponent } from './ui/zalgo-table/zalgo-table.component';

import { ZalgoDraggableDirective } from './directives/draggable/zalgo-draggable.directive';
import { ZalgoAccordionComponent } from './ui/zalgo-accordion/zalgo-accordion.component';
import { ZalgoOffCanvasMenuComponent } from './ui/zalgo-off-canvas-menu/zalgo-off-canvas-menu.component';
import { ZalgoRevealComponent } from './ui/zalgo-reveal/zalgo-reveal.component';

@NgModule({
  declarations: [
    AppComponent,
    ZalgoDropdownFsComponent,
    ZalgoDropdownTcComponent,
    ZalgoTableComponent,
    ZalgoDraggableDirective,
    ZalgoAccordionComponent,
    ZalgoOffCanvasMenuComponent,
    ZalgoRevealComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
