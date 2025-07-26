import { Injectable } from '@nestjs/common';
import { CreatePostShareDto } from './dto/create-post_share.dto';
import { UpdatePostShareDto } from './dto/update-post_share.dto';

@Injectable()
export class PostSharesService {
  create(createPostShareDto: CreatePostShareDto) {
    return 'This action adds a new postShare';
  }

  findAll() {
    return `This action returns all postShares`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postShare`;
  }

  update(id: number, updatePostShareDto: UpdatePostShareDto) {
    return `This action updates a #${id} postShare`;
  }

  remove(id: number) {
    return `This action removes a #${id} postShare`;
  }
}
