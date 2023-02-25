import { Module } from '@nestjs/common'
import { ProductModule } from './product/product.module'

import { MongooseModule } from '@nestjs/mongoose'
import { ReviewModule } from './review/review.module'
import { path } from 'app-root-path'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ConfigModule } from '@nestjs/config'

//!ServeStaticModule делаем статичную папку с картинками чтобы она открывалась через url
// core.ignorecase
//это корневой файл где собираются все наши модули
@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: `${path}/uploads`,
      serveRoot: `/uploads`
    }),
    MongooseModule.forRoot(process.env.DB_HOST_CAFE),

    ProductModule,
    ReviewModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
