import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['settling-mosquito-9392-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'c2V0dGxpbmctbW9zcXVpdG8tOTM5MiRtVrU-iIAPJmIPn19OWw0ShXN7T3Ou8WE',
          password:
            'Uqloybt3wYg2QUhuI6_0wvW1MoKwF2gEtOH8VxOxgsfBiiMaEAGrjoUmJRKwjTDixI7gag==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
