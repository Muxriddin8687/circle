import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainBarComponent } from './components/main-bar/main-bar.component';
import { SmallAboutUsComponent } from './components/small-about-us/small-about-us.component';
import { InformationComponent } from './components/information/information.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { CirclesComponent } from './components/circles/circles.component';
import { HomeComponent } from './pages/home/home.component';
import { CircleDetailsComponent } from './pages/circle-details/circle-details.component';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    FooterComponent,
    MainBarComponent,
    SmallAboutUsComponent,
    InformationComponent,
    ContactComponent,
    CirclesComponent,
    HomeComponent,
    CircleDetailsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
