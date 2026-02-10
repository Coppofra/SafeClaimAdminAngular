import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserRole } from '../../core/models/user';

@Component({
  selector: 'app-new-account',
  imports: [CommonModule, FormsModule],
  templateUrl: './new-account.html',
  styleUrl: './new-account.css',
})
export class NewAccount {
  roles = Object.values(UserRole);
}
