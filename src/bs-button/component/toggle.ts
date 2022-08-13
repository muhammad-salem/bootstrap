import { Component, OnInit, OnDestroy, View } from '@ibyar/aurora';


const CLASS_NAME_ACTIVE = 'active'

@Component({
	selector: 'bs-btn-toggle',
	extend: 'button',
})
export class BsToggleButton implements OnInit, OnDestroy {

	@View()
	_element: HTMLButtonElement;

	private _listener = (event: MouseEvent) => {
		this._element.setAttribute(
			'aria-pressed',
			this._element.classList.toggle(CLASS_NAME_ACTIVE) as any as string
		);
	};

	onInit(): void {
		this._element.addEventListener('click', this._listener);
	}

	onDestroy(): void {
		this._element.removeEventListener('click', this._listener);
	}

}
