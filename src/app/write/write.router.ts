import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { WriteComponent } from './write.component';

const routes: Route[] = [
  {
    path: '',
    component: WriteComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
