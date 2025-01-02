import {Role} from './role.model';

export interface User {
  id: string
  name: string
  email: string
  phone: any
  image: any
  provider: string
  notification_token: any
  roles: Role[]
  lastOnline: string
}
