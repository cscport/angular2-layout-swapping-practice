import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {InnerComponent} from './inner.component';

@Component({
  template: `
    <h1>Application Layout</h1>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/inner', name: 'Inner', component: InnerComponent }
])

export class ApplicationLayout { }
