import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Media_Enum } from "src/enums/media.enum";

export class CreateMediaDto {
    @IsNotEmpty()
    @IsString()
    path: string;

    @IsOptional()
    @IsEnum(Media_Enum)
    type: Media_Enum;

    @IsOptional()
    @IsNumber()
    orderIndex: number;

    @IsOptional()
    @IsNumber()
    postId: number;

    @IsOptional()
    @IsNumber()
    shortVideoId: number;

    @IsOptional()
    @IsNumber()
    messageId: number;
}