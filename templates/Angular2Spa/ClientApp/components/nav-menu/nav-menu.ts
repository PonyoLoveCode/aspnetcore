import * as ng from 'angular2/core';
import * as router from 'angular2/router';

@ng.Component({
  selector: 'nav-menu'
})
@ng.View({
  template: require('./nav-menu.html'),
  directives: [router.ROUTER_DIRECTIVES],
  styles: [require('./nav-menu.css')]
})
export class NavMenu {
}
