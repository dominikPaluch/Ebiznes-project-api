import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {EquipmentModule} from './equipment/equipment.module';
import {UserModule} from './users/user.module';
import {ReservationModule} from './reservation/reservation.module';

@Module({
    imports: [
        EquipmentModule,
        UserModule,
        ReservationModule,
        MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}

MongooseModule.forRootAsync({
    useFactory: () => ({
        uri: 'mongodb://localhost:27017/nest',
    }),
});
