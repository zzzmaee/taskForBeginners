import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-user-card',
	standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input({required: true}) user: any;
	@Output() deleteUserEvent = new EventEmitter<number | undefined>()

	deleteUser(id: number | undefined) {
		this.deleteUserEvent.emit(id)
	}
}

