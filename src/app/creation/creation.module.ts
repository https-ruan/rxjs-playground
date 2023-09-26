import { NgModule } from '@angular/core';

import { SharedModule } from '@app/@shared/shared.module';
import { CreationRoutingModule } from './creation-routing.module';
import { CreationComponent } from './creation.component';
import { AjaxComponent } from './ajax/ajax.component';

@NgModule({
  declarations: [CreationComponent, AjaxComponent],
  imports: [SharedModule, CreationRoutingModule],
})
export class CreationModule {}
