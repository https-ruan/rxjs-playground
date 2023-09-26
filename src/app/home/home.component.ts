import { Component } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { appRoutes } from '@app/@core/routes/app.routes';
import { Routes } from '@angular/router';

@Component({
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public appRoutes: Routes = appRoutes;
}
