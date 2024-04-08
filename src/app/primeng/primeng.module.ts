import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {MenubarModule} from 'primeng/menubar';


const importedPrimeNgModules = [
    MenubarModule,
];

@NgModule({
    imports: [CommonModule, ...importedPrimeNgModules],
    exports: [...importedPrimeNgModules],

})
export class PrimeNgModule{}
