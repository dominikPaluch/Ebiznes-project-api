import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Reservation} from '../models/reservation';
import {CreateReservationDto} from '../dto/create-reservation.dto';

@Injectable()
export class ReservationService {

    constructor(@InjectModel('Reservation') private readonly reservationModel: Model<Reservation>) {
    }

    async findAll(): Promise<Reservation[]> {
        return await this.reservationModel.find().exec();
    }

    async findOne(id: number): Promise<Reservation> {
        return await this.reservationModel.findById(id);
    }

    async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
        const createdReservation = new this.reservationModel(createReservationDto);
        return await createdReservation.save();
    }

    async update(id: string, updatedReservationDto: CreateReservationDto): Promise<Reservation> {
        return await this.reservationModel.findByIdAndUpdate(id, updatedReservationDto).exec();
    }

    async remove(id: number) {
        return await this.reservationModel.findByIdAndRemove(id).exec()
    }

}
