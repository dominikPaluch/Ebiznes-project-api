import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ReservationService} from './reservation.service';
import {Reservation} from '../models/reservation';
import {CreateReservationDto} from '../dto/create-reservation.dto';

@Controller('reservations')
export class ReservationController {

    constructor(private readonly reservationService: ReservationService) {
    }

    @Get()
    async findAll(): Promise<Reservation[]> {
        return this.reservationService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Reservation> {
        return await this.reservationService.findOne(id)
    }

    @Post()
    async create(@Body() createReservationDto: CreateReservationDto) {
        this.reservationService.create(createReservationDto);
    }

    @Delete(':id')
    async remove(@Param('id') id) {
        this.reservationService.remove(id);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() updatedReservation) {
        return this.reservationService.update(id, updatedReservation);
    }

}
