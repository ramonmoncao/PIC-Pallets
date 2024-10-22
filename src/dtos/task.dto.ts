import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title!: string

  @IsOptional()
  @IsBoolean()
  completed?: boolean

  @IsInt()
  @IsNotEmpty()
  userId!: number
}

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string

  @IsOptional()
  @IsBoolean()
  completed?: boolean
}