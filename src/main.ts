import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('/api') //делается для того чтобы все наши ендпоинты начинались c /api
  await app.listen(4200)
}
bootstrap()
