import { IsString, IsNotEmpty, IsInt, IsNumber } from 'class-validator';

export class CreateProductDto {
    @IsInt()
    @IsNotEmpty()
    id!: number
    
    @IsString()
    @IsNotEmpty()
    name!: string

    @IsInt()
    @IsNotEmpty()
    width!: number

    @IsInt()
    @IsNotEmpty()
    lenght!: number

    @IsNumber()
    @IsNotEmpty()
    price?: number
}

export class UpdateProductDto {
    @IsNumber()
    @IsNotEmpty()
    price?: number

}