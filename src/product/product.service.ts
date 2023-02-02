import { Injectable } from '@nestjs/common'
import { Product, ProductDocument } from 'src/schemas/product.schema'
import { CreateProductDto } from './dto/create-product.dto'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { NotFoundException } from '@nestjs/common/exceptions'


@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto)
    return createdProduct.save()
  }

  async findAll(): Promise<Product[]> {
    const products = await this.productModel.find().populate('reviews')
    return products
  }

  async findOneBySlug(slug: string) {
    const product = await this.productModel.findOne({ slug })
    if (!product) throw new NotFoundException('Product not found')
    return product
  }

  async findRelatives(currentProductId: number) {
    const product = await this.productModel.find({ currentProductId })
    if (!product) throw new NotFoundException('Product not found')
    return product
  }

  async findOneById(id: string) {
    const product = await this.productModel.findById(id).populate('reviews')
    if (!product) throw new NotFoundException(`Product with id ${id} not found`)

    return product
  }
  // update(name: string, updateProductDto: UpdateProductDto) {
  //   return this.productModel.updateOne(
  //     { name },
  //     { $set: { ...updateProductDto } }
  //   )
  // }

  // remove(name: string) {
  //   return this.productModel.deleteOne({ name })
  // }
}
