import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Product, ProductSchema } from 'src/schemas/product.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  controllers: [ProductController],
  providers: [ProductService] //для сервисов
})
export class ProductModule {}
