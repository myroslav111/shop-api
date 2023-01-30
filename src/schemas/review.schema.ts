import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
import { Product } from './product.schema'

export type ReviewDocument = HydratedDocument<Review>

@Schema({ versionKey: false, timestamps: true })
export class Review {
  @Prop({ type: String })
  text: string

  @Prop({ type: Number })
  rating: number

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  product: Product
}

export const ReviewSchema = SchemaFactory.createForClass(Review)
