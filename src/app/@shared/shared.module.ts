import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesListComponent } from './components/routes-list/routes-list.component';
import { ModuleTitlePipe } from './pipes/module-title.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [RoutesListComponent, ModuleTitlePipe],
  exports: [RoutesListComponent, ModuleTitlePipe],
})
export class SharedModule {}
