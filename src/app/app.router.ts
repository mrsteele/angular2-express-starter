import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'read'},
  { loadChildren: 'app/write/write.module#WriteModule', path: 'write' },
  { loadChildren: 'app/read/read.module#ReadModule', path: 'read' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes
);
