import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive } from "class-validator";

export class CreateTableDto {
    @IsNumber()
    @IsPositive()
    @ApiProperty({
        description: 'o número da mesa',
        example: 1,
    })
    number: number;
}