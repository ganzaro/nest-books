import { ApiModelProperty } from '@nestjs/swagger';

export class BookDTO {
    @ApiModelProperty()
    book: string;

    @ApiModelProperty()
    description: string;
}
