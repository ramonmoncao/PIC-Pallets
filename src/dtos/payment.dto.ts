import { IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator"

export class CreatePaymentDto {
    @IsString()
    @IsNotEmpty()
    orderId!: string  // Identificador (obrigatório)

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()   // Tem que ser positivo
    value!: number  // Valor (obrigatório)

    @IsDate()
    @IsNotEmpty()
    date!: Date  // Data (obrigatório)

    @IsString()
    @IsOptional()
    description?: string
}

export class UpdatePaymentDto {
    @IsInt()
    @IsNotEmpty()
    id!: number;  // ID do pagamento (obrigatório)

    @IsNumber()
    @IsOptional()
    value?: number  // Valor (opcional para atualização)

    @IsDate()
    @IsOptional()
    date?: Date  // Data (opcional para atualização)

    @IsString()
    @IsOptional()
    description?: string
}