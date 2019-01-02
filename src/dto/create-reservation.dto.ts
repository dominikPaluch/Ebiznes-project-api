import { IsInt, IsString, IsDate } from 'class-validator';

export class CreateReservationDto {
    @IsInt() readonly userId: Number;
    @IsInt() readonly totalPrice: Number;
    @IsDate() readonly start: Date;
    @IsDate() readonly stop: Date;
    @IsString() readonly status: string;
}
