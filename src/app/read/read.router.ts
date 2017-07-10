import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ReadComponent } from './read.component';

const routes: Route[] = [
  {
    path: '',
    component: ReadComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
