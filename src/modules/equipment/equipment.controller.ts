import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Equipment} from '../../models/equipment';
import {EquipmentService} from './equipment.service';
import {CreateEquipmentDto} from '../../dto/create-equipment.dto';

@Controller('equipments')
export class EquipmentController {

    constructor(private readonly equipmentService: EquipmentService) {
    }

    @Get()
    async findAll(): Promise<Equipment[]> {
        return this.equipmentService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Equipment> {
        return await this.equipmentService.findOne(id)
    }

    @Post()
    async create(@Body() createEquipmentDto: CreateEquipmentDto) {
        this.equipmentService.create(createEquipmentDto);
    }

    @Delete(':id')
    async remove(@Param('id') id) {
        this.equipmentService.remove(id);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() updatedEq) {
        return this.equipmentService.update(id, updatedEq);
    }

}
