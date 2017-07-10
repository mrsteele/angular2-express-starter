import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    TopNavigationComponent,
    ButtonComponent,
    LoaderComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TopNavigationComponent,
    LoaderComponent,
    ButtonComponent,
    InputComponent
  ]
})
export class SharedModule {}
