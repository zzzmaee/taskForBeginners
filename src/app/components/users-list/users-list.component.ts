import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserCardComponent } from '../user-card/user-card.component';
import { NgForOf } from '@angular/common';
import { AppComponent } from '../../app.component';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, NgForOf, AppComponent],
  templateUrl: './users-list.component.html'
})
export class UserListComponent implements OnInit {
  public users: User[] = [];

  constructor(private readonly usersService: UsersService) {
  }

  deleteUser(id: number): void {
    this.usersService.deleteUser(id);
  }

  ngOnInit(): void {
    this.usersService.users$.subscribe(users => {
      this.users = users;
    });
  }

}

