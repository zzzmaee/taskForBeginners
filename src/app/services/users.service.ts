import { Injectable } from '@angular/core';
import { UsersApi } from './users-api.service';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
  private readonly users = new BehaviorSubject<User[]>([]);
  public users$ = this.users.asObservable();

	constructor(private usersApi: UsersApi) {
		this.loadUsers();
	}

	public deleteUser(id: number) {
		this.users.pipe(
			map(users => users.filter(user => user.id !== id))
		).subscribe(updatedUsers => {
			this.users.next(updatedUsers);
		});
	}

  private loadUsers() {
    this.usersApi.getUsers().subscribe((users: any) => {
      this.users.next(users);
    });
  }

}

