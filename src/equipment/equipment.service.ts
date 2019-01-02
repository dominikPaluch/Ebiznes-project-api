import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Equipment} from '../models/equipment';
import {CreateEquipmentDto} from '../dto/create-equipment.dto';

@Injectable()
export class EquipmentService {

    constructor(@InjectModel('Equipment') private readonly equipmentModel: Model<Equipment>) {
    }

    async findAll(): Promise<Equipment[]> {
        return await this.equipmentModel.find().exec();
    }

    async findOne(id: number): Promise<Equipment> {
        return await this.equipmentModel.findById(id);
    }

    async create(createEquipmentDto: CreateEquipmentDto): Promise<Equipment> {
        const createdEquipment = new this.equipmentModel(createEquipmentDto);
        return await createdEquipment.save();
    }

    async update(id: string, updatedEquipmentDto: CreateEquipmentDto): Promise<Equipment> {
        return await this.equipmentModel.findByIdAndUpdate(id, updatedEquipmentDto).exec();
    }

    async remove(id: number) {
        return await this.equipmentModel.findByIdAndRemove(id).exec()
    }

}
