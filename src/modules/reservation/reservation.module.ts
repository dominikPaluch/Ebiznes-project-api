import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {DatabaseModule} from '../database/database.module';
import {ReservationSchema} from '../../schema/reservation.schema';
import {ReservationService} from './reservation.service';
import {reservationsProviders} from './reservation.providers';
import {ReservationController} from './reservation.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Reservation', schema: ReservationSchema}]),
        DatabaseModule,
    ],
    providers: [ReservationService, ...reservationsProviders],
    controllers: [ReservationController],
})
export class ReservationModule {
}
