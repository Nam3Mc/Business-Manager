import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AccountDto {

    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    @IsString()
    userName: string

    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$^&*]).{8,15}$/,)
    password: string

}