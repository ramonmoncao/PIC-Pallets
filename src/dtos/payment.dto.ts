import { IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator"

export class CreatePaymentDto {
    @IsInt()
    @IsNotEmpty()
    orderId!: number  // Identificador (obrigatório)

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()   // Tem que ser positivo
    value!: number  // Valor (obrigatório)

    @IsDate()
    @IsNotEmpty()
    date!: Date  // Data (obrigatório)
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
}