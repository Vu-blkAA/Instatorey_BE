import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from 'src/entities';

@Injectable()
export class MediasService {

  constructor(
    @InjectRepository(Media) private readonly mediaRepository: Repository<Media>
  ) {}

  create(createMediaDto: CreateMediaDto) {
    const media = this.mediaRepository.create(createMediaDto)
    return this.mediaRepository.save(media)
  }

  async findAll() {
    return await this.mediaRepository.find({
      relations: {
        post: true,
        shortVideo: true,
      }
    });
  }

  async findOne(id: number) {
    return await this.mediaRepository.findOne({
      where: { id},
      relations: {
        post: true,
        shortVideo: true,
      }
    })
  }

  update(id: number, updateMediaDto: UpdateMediaDto) {
    return this.mediaRepository.update(id, updateMediaDto)
  }
}
