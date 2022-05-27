import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const microservicesOptions = {
  transport: Transport.MQTT,
  options: {
    url: 'mqtt://localhost:1883',
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
