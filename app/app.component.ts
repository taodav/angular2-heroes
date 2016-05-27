import {Component} from '@angular/core'
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated'
import {HeroService} from './hero.service'
import {HeroesComponent} from './heroes.component'
import {DashboardComponent} from './dashboard.component'

@RouteConfig([
  {
  path: '/heroes',
  name: 'Heroes',
  component: HeroesComponent
  }
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }
])

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService]
})
// https://angular.io/docs/ts/latest/tutorial/toh-pt5.html

export class AppComponent {
  title = 'Tour of Heroes';
}
