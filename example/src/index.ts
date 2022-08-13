
import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from '@ibyar/aurora';

import '@ibyar/bs-button';


@Component({
	selector: 'app-root',
	template: `
	<bs-btn-toggle class="btn btn-outline-primary">Test Bootstrap Toggle Button</bs-btn-toggle>

	<bs-btn-outline-primary>bs-btn-outline-primary</bs-btn-outline-primary>
	<bs-btn-outline-secondary>bs-btn-outline-secondary</bs-btn-outline-secondary>
	<bs-btn-outline-success>bs-btn-outline-success</bs-btn-outline-success>
	<bs-btn-outline-danger>bs-btn-outline-danger</bs-btn-outline-danger>
	<bs-btn-outline-warning>bs-btn-outline-warning</bs-btn-outline-warning>
	<bs-btn-outline-info>bs-btn-outline-info</bs-btn-outline-info>
	<bs-btn-outline-light>bs-btn-outline-light</bs-btn-outline-light>
	<bs-btn-outline-dark>bs-btn-outline-dark</bs-btn-outline-dark>
	
	`,
})
export class AppRootComponent {

}
