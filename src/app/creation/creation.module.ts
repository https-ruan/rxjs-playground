import { NgModule } from '@angular/core';

import { SharedModule } from '@app/@shared/shared.module';
import { CreationRoutingModule } from './creation-routing.module';
import { CreationComponent } from './creation.component';

@NgModule({
  declarations: [CreationComponent],
  imports: [SharedModule, CreationRoutingModule],
})
export class CreationModule {}
