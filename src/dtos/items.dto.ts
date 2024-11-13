import { IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator"

export class CreateItemsDto {
    @IsInt()
    @IsNotEmpty()
    orderId!: number  // Identificador (obrigatório)

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()   // Tem que ser positivo
    quantity!: number  // Valor (obrigatório)

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()   // Tem que ser positivo
    price!: number  // Valor (obrigatório)

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()   // Tem que ser positivo
    subtotal!: number  // Valor (obrigatório)

    @IsDate()
    @IsNotEmpty()
    date!: Date  // Data (obrigatório)

    @IsString()
    @IsOptional()
    description?: string

}

export class UpdateItemsDto {
    @IsInt()
    @IsNotEmpty()
    id!: number;  // ID do pagamento (obrigatório)

    @IsNumber()
    @IsOptional()
    value?: number  // Valor (opcional para atualização)

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()   // Tem que ser positivo
    quantity!: number  // Valor (obrigatório)

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()   // Tem que ser positivo
    price!: number  // Valor (obrigatório)

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()   // Tem que ser positivo
    subtotal!: number  // Valor (obrigatório)

    @IsDate()
    @IsOptional()
    date?: Date  // Data (opcional para atualização)

    @IsString()
    @IsOptional()
    description?: string
}