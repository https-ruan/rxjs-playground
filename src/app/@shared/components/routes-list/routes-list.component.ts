import { Component, Input } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.scss'],
})
export class RoutesListComponent {
  @Input({ required: true }) routes: Routes = [];
}
