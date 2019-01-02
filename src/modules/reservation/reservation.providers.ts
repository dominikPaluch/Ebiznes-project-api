import {Connection} from 'mongoose';
import {getModelToken} from '@nestjs/mongoose';
import {ReservationSchema} from '../../schema/reservation.schema';

export const reservationsProviders = [
    {
        provide: getModelToken('Reservation'),
        useFactory: (connection: Connection) => connection.model('Reservation', ReservationSchema),
        inject: ['DbConnectionToken']
    }
];
