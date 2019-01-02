import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserServices} from './user.services';
import {User} from '../models/user';
import {CreateUserDto} from '../dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly userServices: UserServices) {
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.userServices.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<User> {
        return await this.userServices.findOne(id)
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        this.userServices.create(createUserDto);
    }

    @Delete(':id')
    async remove(@Param('id') id) {
        this.userServices.remove(id);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() updatedUser) {
        return this.userServices.update(id, updatedUser);
    }

}
