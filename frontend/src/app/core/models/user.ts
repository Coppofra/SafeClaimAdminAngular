export enum UserRole {
  ADMIN = 'Admin',
  SOCCORSO = 'Soccorso',
  OFFICINA = 'Officina',
  PERITO = 'Perito',
  AUTOMOBILISTA = 'Automobilista'
}

export interface AppUser {
  id: number;
  name: string;
  email: string;
  roles: UserRole[];
  active: boolean;
}