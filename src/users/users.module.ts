import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { PasswordService } from '../auth/password.service';
import { UserController } from './user.controller';

@Module({
  imports: [],
  providers: [UsersResolver, UsersService, PasswordService],
  controllers: [UserController],
})
export class UsersModule {}
