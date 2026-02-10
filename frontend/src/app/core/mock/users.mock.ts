import { AppUser, UserRole } from "../models/user";


export const USERS: AppUser[] = [
  {
    id: 1,
    name: 'Mario Rossi',
    email: 'mario@mail.it',
    roles: [UserRole.ADMIN],
    active: true
  },
  {
    id: 2,
    name: 'Luigi Bianchi',
    email: 'luigi@mail.it',
    roles: [UserRole.OFFICINA],
    active: true
  }
];
