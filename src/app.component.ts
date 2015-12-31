import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {LandingPage} from './landing-page.component';
import {ApplicationLayout} from './application-layout.component';

@Component({
  selector: 'my-app',
  template:`
  <h1>Practice Templating</h1>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/' , name: 'LandingPage', component: LandingPage },
  {path: '/...', name: 'ApplicationLayout', component: ApplicationLayout}
])

export class AppComponent { }
