import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from './book.dto';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) {}

    @Get()
    showAllBooks() {
        return this.bookService.showAll();
    }

    @Post()
    createBook(@Body() data: BookDTO) {
        return this.bookService.create(data);
    }

    @Get(':id')
    showBook(@Param('id') id: string) {
        return this.bookService.read(id);
    }

    @Put()
    updateIdea(
        @Param('id') id: string,
        @Body() body: Partial<BookDTO>,
    ) {
        return this.bookService.update(id, body);

    }

    @Delete()
    destroyIdea(@Param('id') id: string) {
        return this.bookService.destroy(id);
    }

}
