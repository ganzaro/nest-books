// TODO
import { IsNotEmpty } from 'class-validator';

import { BookEntity } from 'src/book/book.entity';

export class UserDTO {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

export class UserRO {
  id: string;
  username: string;
  created: Date;
  token?: string;
  books?: BookEntity[];
}
