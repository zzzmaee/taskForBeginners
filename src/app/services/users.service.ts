import { Injectable } from '@angular/core';
import { UsersApi } from './users-api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
}

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	private readonly users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
	public users$: Observable<User[]> = this.users.asObservable();

	constructor(private usersApi: UsersApi) {
		this.loadUsers();
	}

	private loadUsers() {
		this.usersApi.getUsers().subscribe((users: any) => {
			this.users.next(users);
		});
	}

	public deleteUser(id: number) {
		this.users.pipe(
			map(users => users.filter(user => user.id !== id))
		).subscribe(updatedUsers => {
			this.users.next(updatedUsers);
		});
	}
}

