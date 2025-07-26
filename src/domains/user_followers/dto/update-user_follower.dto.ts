import { PartialType } from '@nestjs/mapped-types';
import { CreateUserFollowerDto } from './create-user_follower.dto';

export class UpdateUserFollowerDto extends PartialType(CreateUserFollowerDto) {}
