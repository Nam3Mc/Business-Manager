import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class OwnerDto {

    @IsNotEmpty()
    @MinLength(3)
    @IsString()
    name: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNumber()
    @MinLength(10)
    phone: number

    @IsNotEmpty()
    @IsString()
    DOB: string

}
