import { IsString, IsNotEmpty, IsInt, IsNumber } from 'class-validator';

export class CreateProductDto {
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