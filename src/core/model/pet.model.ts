import {User} from './user.model';

export interface Pet {
  id: number;
  photo: string;
  name: string;
  type: string;
  breed: string;
  gender: string;
  weight: number;
  behavior: string;
  description?: string;
  birthDate: Date;
  userId: number;
  user?: User;
}
