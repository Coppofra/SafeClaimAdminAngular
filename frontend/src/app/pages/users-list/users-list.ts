import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { USERS } from '../../core/mock/users.mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList {
  users = USERS;
  constructor(private router: Router) {}
  open(id: number) {
    this.router.navigate(['/users', id]);
  }
}
