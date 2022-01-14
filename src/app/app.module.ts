import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageViewerComponent } from './page-viewer/page-viewer.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PageViewerComponent, SafeHtmlPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
