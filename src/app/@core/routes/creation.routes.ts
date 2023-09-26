import { Routes } from '@angular/router';
import { AjaxComponent } from '@app/creation/ajax/ajax.component';
import { CreationComponent } from '@app/creation/creation.component';

export const creationRoutes: Routes = [
  { path: '', component: CreationComponent },
  { path: 'ajax', component: AjaxComponent },
];
