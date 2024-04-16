import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {DropdownModule} from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { SpinnerModule } from 'primeng/spinner';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SharedModule } from 'primeng/api';
import { ImageModule } from 'primeng/image';


const importedPrimeNgModules = [
    MenubarModule,
    ButtonModule,
    DropdownModule,
    MenuModule,
    CardModule,
    DividerModule,
    SpinnerModule,
    ToastModule,
    InputTextModule,
    PasswordModule,
    SharedModule,
    ImageModule
];

@NgModule({
    imports: [CommonModule, ...importedPrimeNgModules],
    exports: [...importedPrimeNgModules],

})
export class PrimeNgModule{}
