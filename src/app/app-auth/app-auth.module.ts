import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAuthService } from './service/app-auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AppAuthService]
})
export class AppAuthModule { }
