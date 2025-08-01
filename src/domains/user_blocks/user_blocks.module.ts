import { Module } from '@nestjs/common';
import { UserBlocksService } from './user_blocks.service';
import { UserBlocksController } from './user_blocks.controller';
import { UserBlock } from '../../entities/user_block.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([UserBlock])],
  controllers: [UserBlocksController],
  providers: [UserBlocksService],
})
export class UserBlocksModule {}
