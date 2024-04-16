import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { EditorModule } from 'primeng/editor';
import { ProgressBarModule } from 'primeng/progressbar';


@NgModule({
  declarations: [
  ],
  imports: [
    CardModule,
    CommonModule,
    EditorModule,
    ProgressBarModule
  ],
  exports:[
  ],
})
export class BlogEditorModule{ }