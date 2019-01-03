import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { BookEntity } from 'src/book/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, BookEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
