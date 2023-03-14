import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { AtGuard } from './auth/guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  // const reflector = new Reflector()
  // app.useGlobalGuards(new AtGuard(reflector))
  app.useGlobalGuards(new AtGuard())
  await app.listen(3333);
}
bootstrap();
