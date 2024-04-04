import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

import {MenubarModule} from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AboutComponent } from './about/about.component';
import { SharedRouteModule } from './shared-routing.module';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedRouteModule,
    MenubarModule,
    MessagesModule,
    ToastModule,
    InputTextModule,
    ButtonModule,
    CardModule,
  ],
  exports: [NavbarComponent, FooterComponent, SearchComponent]
})
export class SharedModule { }
