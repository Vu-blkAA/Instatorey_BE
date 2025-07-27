import { Module } from '@nestjs/common';
import { UserBlocksService } from './user_blocks.service';
import { UserBlocksController } from './user_blocks.controller';

@Module({
  controllers: [UserBlocksController],
  providers: [UserBlocksService],
})
export class UserBlocksModule {}
