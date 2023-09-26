import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { creationRoutes } from '@app/@core/routes/creation.routes';

@NgModule({
  imports: [RouterModule.forChild(creationRoutes)],
  exports: [RouterModule],
})
export class CreationRoutingModule {}
