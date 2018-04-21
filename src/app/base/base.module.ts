import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BaseRoutingModule } from './base-routing.module';


@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: []
})
export class BaseModule { }
