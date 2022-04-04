import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ProductSchema } from './schemas/product.schema';
import { ProdcutResponseSchema } from './schemas/product_response.schema';

@Controller('api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiBody({ type: ProductSchema })
  @ApiCreatedResponse({type: ProdcutResponseSchema,})
  create(@Body() productDto: ProductDto) {
    return this.productService.create(productDto);
  }

  @Get()
  @ApiOkResponse({type: [ProdcutResponseSchema]})
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: ProdcutResponseSchema})
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({type: ProdcutResponseSchema})
  @ApiBody({ type: ProductSchema })
  update(@Param('id') id: string, @Body() productDto: ProductDto) {
    return this.productService.update(+id, productDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: ProdcutResponseSchema})
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
