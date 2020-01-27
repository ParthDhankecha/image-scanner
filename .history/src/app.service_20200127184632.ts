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
    { key: "residentName", points: [100, 300, 590, 340] },
    { key: "prescriberName", points: [600, 290, 1085, 300] },
    { key: "unit", points: [600, 365, 840, 405] },
    { key: "room", points: [845, 365, 1110, 405] },
    { key: "allergies", points: [110, 435, 1300, 470] },
    { key: "prescriberLicense", points: [960, 1156, 1300, 1210] },
    { key: "residentDOB", points: [1095, 300, 1300, 335] },
    { key: "residentVC", points: [350, 370, 590, 405] },
    { key: "residentHC", points: [104, 370, 350, 405] },
    { key: "currentDate", points: [104, 505, 340, 540] },
    { key: "currentTime", points: [350, 505, 830, 540] },
    { key: "status", points: [104, 720, 1335, 1025] },
    { key: "orderNo", points: [1390, 1520, 1354, 1762] },
    { key: "orderType", points: [104, 1120, 1355, 1150] },
    { key: "drugRecordName", points: [104, 1321, 290, 1355] },
    { key: "drugRecordDateTime", points: [340, 1330, 510, 1355] },
    { key: "consentName", points: [515, 1320, 750, 1345] },
    { key: "consentDateTime", points: [760, 1325, 920, 1345] },
    { key: "eBoxName", points: [930, 1320, 1150, 1350] },
    { key: "eBoxDateTime", points: [1150, 1320, 1340, 1350] },
    { key: "carePlanName", points: [110, 1390, 330, 1420] },
    { key: "carePlanDateTime", points: [340, 1390, 510, 1420] },
    { key: "xRayName", points: [510, 1390, 745, 1420] },
    { key: "xRayDateTime", points: [750, 1390, 920, 1420] },
    { key: "stickerName", points: [925, 1390, 1160, 1420] },
    { key: "stickerDateTime", points: [1170, 1390, 1340, 1420] },
    { key: "2ndCheckDateTime", points: [340, 1390, 510, 1420] },
    { key: "2ndCheckName", points: [110, 1390, 335, 1420] }
  ];
}
