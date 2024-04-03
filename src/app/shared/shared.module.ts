import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, FooterComponent, SearchComponent]
})
export class SharedModule { }
