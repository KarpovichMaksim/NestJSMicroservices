import { Injectable } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
  ClientKafka,
} from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientKafka;

  constructor() {
    this.client = ClientProxyFactory.create({
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
    }) as ClientKafka;

    this.client.subscribeToResponseOf('add');
  }

  public accumulate() {
    return this.client.send('add', {});
  }
}
