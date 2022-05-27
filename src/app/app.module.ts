import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { LeftnavComponent } from './dashboard/leftnav/leftnav.component';
import { RightnavComponent } from './dashboard/rightnav/rightnav.component';
import { MainbodyComponent } from './dashboard/mainbody/mainbody.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftnavComponent,
    RightnavComponent,
    MainbodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
