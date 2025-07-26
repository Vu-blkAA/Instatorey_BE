import { Module } from '@nestjs/common';
import { PostSharesService } from './post_shares.service';
import { PostSharesController } from './post_shares.controller';

@Module({
  controllers: [PostSharesController],
  providers: [PostSharesService],
})
export class PostSharesModule {}
