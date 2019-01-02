import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {User} from '../models/user';
import {CreateUserDto} from '../dto/create-user.dto';

@Injectable()
export class UserServices {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) {
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findOne(id: number): Promise<User> {
        return await this.userModel.findById(id);
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async update(id: string, updatedUserDto: CreateUserDto): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, updatedUserDto).exec();
    }

    async remove(id: number) {
        return await this.userModel.findByIdAndRemove(id).exec()
    }

}
