import { PartialType } from '@nestjs/mapped-types';
import { CreatePostShareDto } from './create-post_share.dto';

export class UpdatePostShareDto extends PartialType(CreatePostShareDto) {}
