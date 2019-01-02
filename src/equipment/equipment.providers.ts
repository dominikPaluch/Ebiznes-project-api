import { Connection } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { EquipmentSchema } from '../schema/equipmenet.schema';

export const equipmentsProviders = [
  {
    provide: getModelToken('Equipment'),
    useFactory: (connection: Connection) => connection.model('Equipment', EquipmentSchema),
    inject: ['DbConnectionToken']
  }
];
