import { Routes } from '@angular/router';
import { AjaxComponent } from '@app/creation/ajax/ajax.component';
import { CreationComponent } from '@app/creation/creation.component';
import { DeferComponent } from '@app/creation/defer/defer.component';
import { FromEventComponent } from '@app/creation/from-event/from-event.component';
import { FromComponent } from '@app/creation/from/from.component';
import { IntervalComponent } from '@app/creation/interval/interval.component';

export const creationRoutes: Routes = [
  { path: '', component: CreationComponent },
  { path: 'ajax', component: AjaxComponent },
  { path: 'defer', component: DeferComponent },
  { path: 'from', component: FromComponent },
  { path: 'from-event', component: FromEventComponent },
  { path: 'interval', component: IntervalComponent },
];
