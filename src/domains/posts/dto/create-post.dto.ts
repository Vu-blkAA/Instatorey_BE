import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { Media } from "src/entities";
import { Post_Enum, Post_Status_Enum, Post_Visibility_Enum } from "src/enums/post.enum"

export class CreatePostDto {
    @IsEnum(Post_Enum)
    @IsOptional()
    type: Post_Enum;

    @IsString()
    @IsOptional()
    caption: string;

    @IsEnum(Post_Visibility_Enum)
    @IsOptional()
    visibility: Post_Visibility_Enum;

    @IsEnum(Post_Status_Enum)
    @IsOptional()
    status: Post_Status_Enum;

    // will update later, for now, we will use the user id from the request
    // in future, we will use the user id from jwt token
    @IsNumber()
    @IsNotEmpty()
    userId: number; 

    @IsArray()
    @IsNotEmpty()
    medias: string[]
}
