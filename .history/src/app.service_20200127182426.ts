import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public plottingPoints = [
    { key: "homeName", points: [979, 20, 1260, 35] },
    { key: "homePhone", points: [979, 74, 1115, 90] },
    { key: "homeFax", points: [979, 123, 1115, 139] },
    { key: "pharmacyPhone", points: [420, 80, 555, 85] },
    { key: "pharmacyFax", points: [420, 125, 555, 140] },
    { key: "homeAreaName", points: [600, 368, 775, 405] },
    {}
  ];
}
