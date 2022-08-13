import { Component, OnInit, Input, View } from '@ibyar/aurora';


export type BsBtnSize = 'btn-sm' | 'btn-lg' | undefined;

export abstract class BsButtonComponent implements OnInit {
	abstract _element: HTMLButtonElement;
	abstract size: BsBtnSize;
	abstract getBsClass(): string;
	onInit(): void {
		this._element.classList.add('btn', this.getBsClass());
		if (this.size) {
			this._element.classList.add(this.size);
		}
	}
}

@Component({
	selector: 'bs-btn-primary',
	extend: 'button',
})
export class BsPrimaryButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-primary';
	}
}

@Component({
	selector: 'bs-btn-secondary',
	extend: 'button',
})
export class BsSecondaryButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-secondary';
	}

}

@Component({
	selector: 'bs-btn-success',
	extend: 'button',
})
export class BsSuccessButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-success';
	}

}

@Component({
	selector: 'bs-btn-danger',
	extend: 'button',
})
export class BsDangerButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-danger';
	}

}

@Component({
	selector: 'bs-btn-warning',
	extend: 'button',
})
export class BsWarningButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-warning';
	}

}

@Component({
	selector: 'bs-btn-info',
	extend: 'button',
})
export class BsInfoButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-info';
	}

}

@Component({
	selector: 'bs-btn-light',
	extend: 'button',
})
export class BsLightButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-light';
	}

}

@Component({
	selector: 'bs-btn-dark',
	extend: 'button',
})
export class BsDarkButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-dark';
	}

}

@Component({
	selector: 'bs-btn-link',
	extend: 'button',
})
export class BsLinkButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-link';
	}

}

@Component({
	selector: 'bs-btn-outline-primary',
	extend: 'button',
})
export class BsPrimaryOutlineButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-outline-primary';
	}

}

@Component({
	selector: 'bs-btn-outline-secondary',
	extend: 'button',
})
export class BsSecondaryOutlineButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-outline-secondary';
	}

}

@Component({
	selector: 'bs-btn-outline-success',
	extend: 'button',
})
export class BsSuccessOutlineButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-outline-success';
	}

}

@Component({
	selector: 'bs-btn-outline-danger',
	extend: 'button',
})
export class BsDangerOutlineButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-outline-danger';
	}

}

@Component({
	selector: 'bs-btn-outline-warning',
	extend: 'button',
})
export class BsWarningOutlineButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-outline-warning';
	}

}

@Component({
	selector: 'bs-btn-outline-info',
	extend: 'button',
})
export class BsInfoOutlineButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-outline-info';
	}

}

@Component({
	selector: 'bs-btn-outline-light',
	extend: 'button',
})
export class BsLightOutlineButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-outline-light';
	}

}

@Component({
	selector: 'bs-btn-outline-dark',
	extend: 'button',
})
export class BsDarkOutlineButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-outline-dark';
	}

}

@Component({
	selector: 'bs-btn-outline-link',
	extend: 'button',
})
export class BsLinkOutlineButtonComponent extends BsButtonComponent {

	@View()
	_element: HTMLButtonElement;

	@Input()
	size: BsBtnSize;

	getBsClass() {
		return 'btn-outline-link';
	}

}
