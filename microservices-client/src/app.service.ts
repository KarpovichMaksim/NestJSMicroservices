import { Injectable } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
} from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.NATS,
      options: {
        servers: ['nats://localhost:4222'],
      },
    });
  }

  public accumulate(data: number[]) {
    return this.client.send<number, number[]>('add', data);
  }
}
