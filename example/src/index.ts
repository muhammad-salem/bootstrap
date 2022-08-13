
import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from '@ibyar/aurora';

import '@ibyar/bs-button';


@Component({
	selector: 'app-root',
	template: `<bs-btn-toggle class="btn btn-outline-primary">Test Bootstrap Toggle Button</bs-btn-toggle>`,
})
export class AppRootComponent {

}
