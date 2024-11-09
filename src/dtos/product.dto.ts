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
    img!: string
}

export class UpdateProductDto {
    
    @IsString()
    @IsOptional()
    name?: string

    @IsInt()
    @IsOptional()
    width?: number

    @IsInt()
    @IsOptional()
    lenght?: number

    @IsNumber()
    @IsOptional()
    price?: number

}