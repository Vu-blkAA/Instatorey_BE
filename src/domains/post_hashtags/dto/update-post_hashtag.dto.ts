import { PartialType } from '@nestjs/mapped-types';
import { CreatePostHashtagDto } from './create-post_hashtag.dto';

export class UpdatePostHashtagDto extends PartialType(CreatePostHashtagDto) {}
