import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public plottingPoints = [
    { key: "homeName", points: [979, 20, 1260, 35] }
  ];
}
