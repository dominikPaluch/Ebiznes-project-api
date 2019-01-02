import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from '../database/database.module';
import { EquipmentSchema } from '../schema/equipmenet.schema';
import { EquipmentService } from './equipment.service';
import { equipmentsProviders } from './equipment.providers';
import { EquipmentController } from './equipment.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Equipment', schema: EquipmentSchema }]),
    DatabaseModule,
  ],
  providers: [EquipmentService, ...equipmentsProviders],
  controllers: [EquipmentController],
})
export class EquipmentModule {
}
