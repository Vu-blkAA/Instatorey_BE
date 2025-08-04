import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Post_Visibility_Enum } from 'src/enums/post.enum';
export class UpdatePostDto {
    @IsString()
    @IsOptional()
    caption: string;

    @IsEnum(Post_Visibility_Enum)
    @IsOptional()
    visibility: Post_Visibility_Enum;
}
