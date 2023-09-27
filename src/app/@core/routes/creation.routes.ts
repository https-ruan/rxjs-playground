import { Routes } from '@angular/router';
import { AjaxComponent } from '@app/creation/ajax/ajax.component';
import { CreationComponent } from '@app/creation/creation.component';
import { DeferComponent } from '@app/creation/defer/defer.component';
import { FromComponent } from '@app/creation/from/from.component';

export const creationRoutes: Routes = [
  { path: '', component: CreationComponent },
  { path: 'ajax', component: AjaxComponent },
  { path: 'defer', component: DeferComponent },
  { path: 'from', component: FromComponent },
];
