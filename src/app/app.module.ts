import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CenteredModalWrapperComponent } from './shared/components/centered-modal-wrapper/centered-modal-wrapper.component';
// import { DetailsModalWrapperComponent } from './shared/components/details-modal-wrapper/details-modal-wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    // CenteredModalWrapperComponent,
    // DetailsModalWrapperComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
