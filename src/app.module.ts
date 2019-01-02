import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {EquipmentModule} from './modules/equipment/equipment.module';
import {UserModule} from './modules/users/user.module';
import {ReservationModule} from './modules/reservation/reservation.module';

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
