import { Roles } from '../enums/roles.enum';

export interface User {
  id?: string;
  name: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  address: Array<UserAddress>;
  role: Roles;
}

export interface UserAddress {
  country: string;
  city: string;
  street: string;
  houseNo: string;
  apartmentNo?: string;
}
