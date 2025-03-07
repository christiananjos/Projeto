import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import AppComponent from './app.component';
import { CarouselBaseComponent } from './carousel-base/carousel-base.component';
import { FooterBaseComponent } from './footer-base/footer-base.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
@NgModule({
  declarations: [
    AppComponent,
    CarouselBaseComponent,
    FooterBaseComponent,
    HeaderComponent,
    SidebarComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }