import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {DropdownModule} from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';


const importedPrimeNgModules = [
    MenubarModule,
    ButtonModule,
    DropdownModule,
    MenuModule,
];

@NgModule({
    imports: [CommonModule, ...importedPrimeNgModules],
    exports: [...importedPrimeNgModules],

})
export class PrimeNgModule{}
