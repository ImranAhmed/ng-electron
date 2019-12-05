import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderActionsComponent } from './header-actions/header-actions.component';
import { HeaderBrandingComponent } from './header-branding/header-branding.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    HeaderActionsComponent,
    HeaderBrandingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
