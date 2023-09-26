import { NgModule } from '@angular/core';

import { SharedModule } from '@app/@shared/shared.module';
import { AjaxComponent } from './ajax/ajax.component';
import { CreationRoutingModule } from './creation-routing.module';
import { CreationComponent } from './creation.component';
import { DeferComponent } from './defer/defer.component';

@NgModule({
  declarations: [CreationComponent, AjaxComponent, DeferComponent],
  imports: [SharedModule, CreationRoutingModule],
})
export class CreationModule {}
