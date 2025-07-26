import { PartialType } from '@nestjs/mapped-types';
import { CreatePostViewDto } from './create-post_view.dto';

export class UpdatePostViewDto extends PartialType(CreatePostViewDto) {}
