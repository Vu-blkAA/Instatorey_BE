import { IsDate, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { Gender_Enum } from "src/enums/user.enum";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    @IsDateString({ strict: true})
    dob: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsEnum(Gender_Enum)
    @IsNotEmpty()
    gender: Gender_Enum;

    @IsString()
    @IsOptional()
    bio: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8, {message: 'Password must be at least 8 characters long'})
    password: string;

    @IsOptional()
    @IsString()
    avatarUrl: string;
}
