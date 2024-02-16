import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(): Promise<PostModel[]> {
    return this.postsService.getPosts();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PostModel> {
    return this.postsService.getPostById(id);
  }
}
