import { NgModule } from '@angular/core';

import { SharedModule } from '@app/@shared/shared.module';
import { AjaxComponent } from './ajax/ajax.component';
import { CreationRoutingModule } from './creation-routing.module';
import { CreationComponent } from './creation.component';
import { DeferComponent } from './defer/defer.component';
import { FromComponent } from './from/from.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { OfComponent } from './of/of.component';

@NgModule({
  declarations: [
    CreationComponent,
    AjaxComponent,
    DeferComponent,
    FromComponent,
    FromEventComponent,
    IntervalComponent,
    OfComponent,
  ],
  imports: [SharedModule, CreationRoutingModule],
  exports: [
    OfComponent
  ],
})
export class CreationModule {}
