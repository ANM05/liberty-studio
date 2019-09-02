import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StudioComponent } from './studio/studio.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
// import {environment} from "../../environments/environment";

// let apiKey: string = environment.apiKey;

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StudioComponent,
    AboutComponent,
    ServicesComponent,
    WorkComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAD-kOlSh5FKsM2uYfbMsmzxBkRi-J0AQQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
