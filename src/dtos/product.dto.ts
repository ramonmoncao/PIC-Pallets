import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name!: string

    @IsNumber()
    @IsNotEmpty()
    width!: number

    @IsNumber()
    @IsNotEmpty()
    length!: number

    @IsNumber()
    @IsNotEmpty()
    capacity!: number

    @IsNumber()
    @IsNotEmpty()
    price!: number

    @IsString()
    @IsOptional()
    img?: string
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
    @IsOptional()
    price?: number

}