import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';
import { NewAccount } from './pages/new-account/new-account';
import { Register } from './pages/register/register';
import { UserManage } from './pages/user-manage/user-manage';
import { UsersList } from './pages/users-list/users-list';

export const routes: Routes = [
    { path: '', component: Login },
  { path: 'register', component: Register },
  { path: 'dashboard', component: Dashboard },
  { path: 'new-account', component: NewAccount },
  { path: 'users', component: UsersList},
  { path: 'users/:id', component: UserManage },
  { path: '**', redirectTo: '' }
];
