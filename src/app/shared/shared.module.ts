import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
