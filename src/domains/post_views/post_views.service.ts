import { Injectable } from '@nestjs/common';
import { CreatePostViewDto } from './dto/create-post_view.dto';
import { UpdatePostViewDto } from './dto/update-post_view.dto';

@Injectable()
export class PostViewsService {
  create(createPostViewDto: CreatePostViewDto) {
    return 'This action adds a new postView';
  }

  findAll() {
    return `This action returns all postViews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postView`;
  }

  update(id: number, updatePostViewDto: UpdatePostViewDto) {
    return `This action updates a #${id} postView`;
  }

  remove(id: number) {
    return `This action removes a #${id} postView`;
  }
}
