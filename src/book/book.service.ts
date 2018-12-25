import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { BookEntity } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {BookDTO } from './book.dto';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity)
        private bookRepository: Repository<BookEntity>,
    ) {}

    async showAll() {
        return await this.bookRepository.find();
    }

    async create(data: BookDTO) {
        const book = await this.bookRepository.create(data);
        await this.bookRepository.save(book);
        return book;
    }

    async read(id: string) {
        return await this.bookRepository.findOne({ where: {id}});
    }

    async update(id: string, data: Partial<BookDTO>) {
        await this.bookRepository.update({id}, data);
        return await this.bookRepository.findOne( { id });
    }

    async destroy(id: string) {
        await this.bookRepository.delete({id});
    }
}
