import { forwardRef, Module } from '@nestjs/common';
import { MediasService } from './medias.service';
import { MediasController } from './medias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from '../../entities/media.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Media]), forwardRef(() => AuthModule)],
  controllers: [MediasController],
  providers: [MediasService],
  exports: [TypeOrmModule, MediasService]
})
export class MediasModule {}
