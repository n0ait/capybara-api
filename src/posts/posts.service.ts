import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  getPosts() {
    return this.prisma.post.findMany();
  }

  getPostById(id: string) {
    return this.prisma.post.findUnique({
      where: {
        id: id,
      },
    });
  }

  getUserPost() {
    return this.prisma.post.findMany();
  }
}
