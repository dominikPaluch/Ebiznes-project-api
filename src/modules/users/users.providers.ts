import {Connection} from 'mongoose';
import {getModelToken} from '@nestjs/mongoose';
import {UserSchema} from '../../schema/user.schema';

export const usersProviders = [
    {
        provide: getModelToken('User'),
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: ['DbConnectionToken']
    }
];
