import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservice = app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ["amqp://test:test@rabbitmq"]
    }
  })

  await app.startAllMicroservicesAsync()
  await app.listen(3000);
}
bootstrap();
