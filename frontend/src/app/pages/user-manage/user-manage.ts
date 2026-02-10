import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS } from '../../core/mock/users.mock';
import { UserRole } from '../../core/models/user';

@Component({
  selector: 'app-user-manage',
  imports: [CommonModule],
  templateUrl: './user-manage.html',
  styleUrl: './user-manage.css',
})
export class UserManage {
  user = USERS.find(
    u => u.id === Number(this.route.snapshot.paramMap.get('id'))
  );
  roles = Object.values(UserRole);

  constructor(private route: ActivatedRoute) {}
}
