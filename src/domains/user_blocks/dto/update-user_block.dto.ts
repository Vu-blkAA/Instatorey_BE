import { PartialType } from '@nestjs/mapped-types';
import { CreateUserBlockDto } from './create-user_block.dto';

export class UpdateUserBlockDto extends PartialType(CreateUserBlockDto) {}
