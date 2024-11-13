import { IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator"

export class CreateOrderDto {
    @IsInt()
    @IsNotEmpty()
    orderId!: number  // Identificador (obrigatório)

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()   // Tem que ser positivo
    userId!: number  // Valor (obrigatório)

    @IsDate()
    @IsNotEmpty()
    date!: Date  // Data (obrigatório)

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()   // Tem que ser positivo
    status!: string  // Valor (obrigatório)
    
    @IsString()
    @IsOptional()
    description?: string

}

export class UpdateOrderDto {
    @IsInt()
    @IsNotEmpty()
    id!: number;  // ID do pagamento (obrigatório)

    @IsNumber()
    @IsOptional()
    value?: number  // Valor (opcional para atualização)

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()   // Tem que ser positivo
    status!: string  // Valor (obrigatório)

    @IsDate()
    @IsOptional()
    date?: Date  // Data (opcional para atualização)

    @IsString()
    @IsOptional()
    description?: string
}