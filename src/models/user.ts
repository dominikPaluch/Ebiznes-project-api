import {Document} from 'mongoose';

export interface User extends Document{
  readonly _id: number;
  readonly email: string;
  readonly password: string;
  readonly accessLevel: string;
}
