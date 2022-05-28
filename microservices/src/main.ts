import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const microservicesOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'math',
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'math-consumer',
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
