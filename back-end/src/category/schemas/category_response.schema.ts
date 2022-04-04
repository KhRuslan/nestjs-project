// src\category\schemas\category.schema.ts
import { ApiProperty } from '@nestjs/swagger';

export class CategoryResponseSchema {
    @ApiProperty({
        type: String,
        example: "Phones",
        minLength: 2
    })
    title: string;
}
