import { Component } from '@angular/core';
import { creationRoutes } from '@app/@core/routes/creation.routes';

@Component({
  selector: 'app-creation',
  template: `
    <h1>{{ this.name | moduleTitle }}</h1>

    <routes-list [routes]="this.routes" />
  `,
})
export class CreationComponent {
  public name: string = CreationComponent.name;
  public routes = creationRoutes;
}
