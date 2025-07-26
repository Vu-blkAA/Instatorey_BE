import { PartialType } from '@nestjs/mapped-types';
import { CreateShortVideoViewDto } from './create-short_video_view.dto';

export class UpdateShortVideoViewDto extends PartialType(CreateShortVideoViewDto) {}
