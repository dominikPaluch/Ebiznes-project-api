import { IsInt, IsString } from 'class-validator';

export class CreateEquipmentDto {

  @IsString() readonly name: string;

  @IsInt() readonly price: number;

  @IsString() readonly status: string;

}
