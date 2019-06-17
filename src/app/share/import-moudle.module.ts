import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "./angular-material.module";
import { HttpClientModule } from "@angular/common/http";
import {SlideshowModule} from 'ng-simple-slideshow';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        HttpClientModule,
        SlideshowModule,
        BrowserAnimationsModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        SlideshowModule,
        BrowserAnimationsModule
    ]
})


export class ImportedModules {

}