import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  camelToSnake,
  SerializeInterceptor,
  snakeToCamel,
} from 'serialize-interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(
    new SerializeInterceptor({
      in: camelToSnake,
      out: snakeToCamel,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('SCMP APis')
    .setDescription('The API for SCMP')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    // operationIdFactory,
    extraModels: [],
  });
  SwaggerModule.setup('api', app, document);
  await app.listen(8080, () => {
    console.log(
      `⚡️[server]: Server is running at http://localhost:${8080}\n🌍[environment]: ${process.env.NODE_ENV}`,
    );
  });
}

bootstrap();
