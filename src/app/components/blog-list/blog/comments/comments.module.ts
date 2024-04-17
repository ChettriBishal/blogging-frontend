import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table'; // Import any PrimeNG modules you need
import { CommentsRoutingModule } from './comments-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    CommentsRoutingModule
  ],
})
export class CommentsModule { }
