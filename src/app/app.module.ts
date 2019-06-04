import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { RoomsComponent } from './rooms/rooms.component';
import { PayComponent } from './pay/pay.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    GalleryComponent,
    ContactComponent,
    RoomsComponent,
    PayComponent
  

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
