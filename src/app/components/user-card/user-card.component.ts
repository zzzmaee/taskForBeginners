import { Component, EventEmitter, Input, Output } from '@angular/core'


@Component({
	selector: 'app-user-card',
	standalone: true,
	templateUrl: './user-card.component.html'
})
export class UserCardComponent {
	@Input({ required: true }) user: any;
	@Output() deleteUserEvent = new EventEmitter<number | undefined>()

	deleteUser(id: number | undefined) {
		this.deleteUserEvent.emit(id)
	}
}

