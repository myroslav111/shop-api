import { Module } from '@nestjs/common'
import { ProductModule } from './product/product.module'

import { MongooseModule } from '@nestjs/mongoose'
import { ReviewModule } from './review/review.module'

const DB_HOST =
  'mongodb+srv://Myroslav:kynYR4hNZ8C60ouB@cluster0.3g8xmkk.mongodb.net/shop?retryWrites=true&w=majority'
//это корневой файл где собираются все наши модули
@Module({
  imports: [ProductModule, ReviewModule, MongooseModule.forRoot(DB_HOST)],
  controllers: [],
  providers: []
})
export class AppModule {}
