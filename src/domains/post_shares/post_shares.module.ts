import { Module } from '@nestjs/common';
import { PostSharesService } from './post_shares.service';
import { PostSharesController } from './post_shares.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostShare } from './entities/post_share.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostShare])],
  controllers: [PostSharesController],
  providers: [PostSharesService],
})
export class PostSharesModule {}
