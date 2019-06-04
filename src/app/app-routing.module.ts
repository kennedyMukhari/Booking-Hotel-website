import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { RoomsComponent } from './rooms/rooms.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'contact', component:ContactComponent},
  {path:'rooms', component:RoomsComponent},
  {path:'pay',component:PayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
