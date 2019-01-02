import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {DatabaseModule} from '../database/database.module';
import {UserSchema} from '../schema/user.schema';
import {UserServices} from './user.services';
import {UsersController} from './users.controller';
import {usersProviders} from './users.providers';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
        DatabaseModule,
    ],
    providers: [UserServices, ...usersProviders],
    controllers: [UsersController],
})
export class UserModule {
}
