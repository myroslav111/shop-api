import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
// import { Review } from './review.schema'
export type ProductDocument = HydratedDocument<Product>

@Schema({ versionKey: false, timestamps: true })
export class Product {
  @Prop({ type: String, unique: true })
  name: string

  @Prop({ type: String, required: true })
  description: string

  @Prop({ type: Number })
  price: number

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }] })
  reviews: []
  // { type: mongoose.Schema.Types.ObjectId, ref: 'Review' }
  @Prop([String])
  images: string[]

  @Prop({ type: String, unique: true })
  slug: string
}

export const ProductSchema = SchemaFactory.createForClass(Product)
