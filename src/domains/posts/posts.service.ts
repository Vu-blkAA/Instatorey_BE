import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Media, Post, User } from 'src/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media_Enum } from 'src/enums/media.enum';
import { RESPONSE_MESSAGE } from 'src/constants/response_message';
import { Post_Status_Enum } from 'src/enums/post.enum';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Media) private readonly mediaRepository: Repository<Media>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const { userId, medias, ...postData} = createPostDto;

    const user = await this.userRepository.findOne({
      where: { id: userId },
      select: {
        id: true,
      }
    });

    if(!user) {
      throw new NotFoundException('User not found');
    }

    if(!medias || medias.length === 0) {
      throw new BadRequestException('Medias are required');
    }

    const post = await this.postRepository.save({
      ...postData,
      user,
    });

    await this.mediaRepository.save(medias.map((mediaPath) => {
      return {
        path: mediaPath,
        type: Media_Enum.IMAGE,
        post,
      }
    }));

    return RESPONSE_MESSAGE.CREATE_SUCCESS;
  }

  findAll() {
    return this.postRepository.find({
      relations: {
        user: true,
        medias: true,
      }
    });
  }

  findOne(id: number) {
    return this.postRepository.findOne({
      where: { id },
      relations: {
        user: true,
        medias: true,
      }
    })
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOneBy({id});
    const { caption, visibility } = updatePostDto;

    if(!post) {
      throw new NotFoundException('Post not found');
    } 

    if(!caption && !visibility) { 
      throw new BadRequestException('Caption or visibility is required');
    }

    await this.postRepository.update(id, {
      caption,
      visibility,
    });
    
    return RESPONSE_MESSAGE.UPDATE_SUCCESS;
  }

  async remove(id: number) {
    const post = await this.postRepository.findOneBy({id});

    if(!post) {
      throw new NotFoundException('Post not found');
    }

    if(post.status === Post_Status_Enum.DISABLED) {
      throw new BadRequestException('Post is already deleted');
    }

    await this.postRepository.update(id, {
      status: Post_Status_Enum.DISABLED,
      deletedAt: new Date(),
    })

    return RESPONSE_MESSAGE.DELETE_SUCCESS;
  }
}
