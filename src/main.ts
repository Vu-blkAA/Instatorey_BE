import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { CustomResponseInterceptor } from './interceptors/custom-response.interceptor';
import { HttpExceptionFilter } from './exception-filter/http-exception.filter';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalInterceptors(new CustomResponseInterceptor());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }));

  // when custom validation need to use DI, we need to use this (Ex: constructor(private readonly dataSource: DataSource) {} in is-unique-constraint.ts)
  useContainer(app.select(AppModule), { fallbackOnErrors: true }); 
  await app.listen(8080);
}
bootstrap();
