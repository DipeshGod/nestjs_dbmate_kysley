import { NestFactory } from '@nestjs/core';
import { generateOpenApi } from '@ts-rest/open-api';
import { AppModule } from './app.module';
import { contract } from 'contract';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const document = generateOpenApi(
    contract,
    {
      info: {
        title: 'Trips API',
        version: '1.0.0',
      },
    },
    { setOperationId: true },
  );

  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
