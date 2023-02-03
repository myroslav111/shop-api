import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { ProductService } from './product.service'
import { CreateProductDto } from './dto/create-product.dto'

import { Product } from 'src/schemas/product.schema'
import { sortType } from './sort.type'
//@Body() это декоратор

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto)
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll()
  }

  // @Get('/:nameSearchTerm')
  // findAllByName(
  //   @Param('nameSearchTerm') nameSearchTerm: string
  // ): Promise<Product[]> {
  //   return this.productService.findAllByName(nameSearchTerm)
  // }

  @Get('/type/:type')
  findAllBySelect(@Param('type') type: sortType): Promise<Product[]> {
    return this.productService.findAllBySelect(type)
  }

  @Get('/slug/:slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.productService.findOneBySlug(slug)
  }

  @Get('/relatives/:id')
  findRelatives(@Param('id') _id: string) {
    return this.productService.findOneById(_id)
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.productService.findOneById(id)
  }
  // @Patch(':name')
  // update(
  //   @Param('name') name: string,
  //   @Body() updateProductDto: UpdateProductDto
  // ) {
  //   return this.productService.update(name, updateProductDto)
  // }

  // @Delete(':name')
  // remove(@Param('name') name: string) {
  //   return this.productService.remove(name)
  // }
}
