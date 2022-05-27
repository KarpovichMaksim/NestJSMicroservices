import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const microservicesOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://localhost:5672'],
    queue: 'cats_queue',
    queueOptions: {
      durable: false,
    },
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microservicesOptions,
  );
  app.listen();
}
bootstrap();
