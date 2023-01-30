import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { Review } from './review.schema'
export type ProductDocument = HydratedDocument<Product>

@Schema({ versionKey: false, timestamps: true })
export class Product {
  @Prop({ type: String, unique: true })
  name: string

  @Prop({ type: String, required: true })
  description: string

  @Prop({ type: Number })
  price: number

  @Prop([Object])
  reviews: Review[]

  @Prop([String])
  images: string[]

  @Prop({ type: String, unique: true })
  slug: string
}

// @Schema()
// export class Review {
//   @Prop({ type: Number })
//   id: number

//   @Prop({ type: String })
//   text: string

//   @Prop({ type: Number })
//   rating: number

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
//   product: Product
// }

// let model = mongoose.model('Product', Product)
// const randomObject = dummy(Product, {
//   ignore: ignoredFields,
//   returnDate: true
// })

// const output = await dummy.model('users').generate()
// console.log(randomObject)

export const ProductSchema = SchemaFactory.createForClass(Product)
