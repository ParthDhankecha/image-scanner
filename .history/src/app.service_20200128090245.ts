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

  private comparableJson = [
    { "homeName": "EDEN - Eden House Care Home", "homePhone": "1-519-856-4622", "homeFax": "1-519-856-1274", "pharmacyPhone": "1-844-316-7369", "pharmacyFax": "1-844-343-7369", "homeAreaName": "Wellington", "residentName": "Aydoner, Hatice", "prescriberName": "Karaul, Ameet", "unit": "Wellington", "room": "W4", "allergies": "No Known Allergies", "prescriberLicense": "105079", "residentDOB": "03/15/1941", "residentVC": "-", "residentHC": "9938100378", "currentDate": "01/15/2020", "currentTime": "12:30", "crushedMedsYes": "No", "crushedMedsNo": "Yes", "status": "EDITED", "orderNo": "Rx002258", "chkStartWithNextMedStrip": "", "orderType": "VO/TO by Knox, Peggy (Nurse)", "drugRecordName": "Gill, Pardeep ", "drugRecordDateTime": "01/15/2020, 12:34" },

    { "homeName": "EDEN - Eden House Care Home", "homePhone": "1-519-856-4622", "homeFax": "1-519-856-1274", "pharmacyPhone": "1-844-316-7369", "pharmacyFax": "1-844-343-7369", "homeAreaName": "Wellington", "residentName": "Aydoner, Hatice", "prescriberName": "Karaul, Ameet", "unit": "Wellington", "room": "W4", "allergies": "No Known Allergies", "prescriberLicense": "105079", "residentDOB": "03/15/1941", "residentVC": "-", "residentHC": "9938100378", "currentDate": "01/13/2020", "currentTime": "13:40", "crushedMedsYes": "No", "crushedMedsNo": "Yes", "status": "", "orderNo": "", "chkStartWithNextMedStrip": "", "orderType": "VO/TO by Knox, Peggy (RN)", "1stCheckName": "NA - Gill, Pardeep ", "1stCheckDateTime": "01/13/2020, 14:01", "consentName": "NA - Gill, Pardeep ", "consentDateTime": "01/13/2020, 14:02", "eBoxName": "Gill, Pardeep ", "eBoxDateTime": "01/13/2020, 14:00", "drugRecordName": "Gill, Pardeep ", "drugRecordDateTime": "01/13/2020, 14:01", "carePlanName": "NA - Gill, Pardeep ", "carePlanDateTime": "01/13/2020, 14:01", "xRayName": "NA - Gill, Pardeep ", "xRayDateTime": "01/13/2020, 14:01", "stickerName": "NA - Gill, Pardeep ", "stickerDateTime": "01/13/2020, 14:01" },

    { "homeName": "EDEN - Eden House Care Home", "homePhone": "1-519-856-4622", "homeFax": "1-519-856-1274", "pharmacyPhone": "1-844-316-7369", "pharmacyFax": "1-844-343-7369", "homeAreaName": "Wellington", "residentName": "Aydoner, Hatice", "prescriberName": "Karaul, Ameet", "unit": "Wellington", "room": "W4", "allergies": "No Known Allergies", "prescriberLicense": "105079", "residentDOB": "03/15/1941", "residentVC": "-", "residentHC": "9938100378", "currentDate": "01/13/2020", "currentTime": "11:51", "crushedMedsYes": "No", "crushedMedsNo": "Yes", "status": "", "orderNo": "", "chkStartWithNextMedStrip": "", "orderType": "VO/TO by Knox, Peggy (RN)", "1stCheckName": "NA - Gill, Pardeep ", "1stCheckDateTime": "01/13/2020, 12:24", "consentName": "", "consentDateTime": "", "eBoxName": "NA - Gill, Pardeep ", "eBoxDateTime": "01/13/2020, 12:40", "drugRecordName": "NA - Gill, Pardeep ", "drugRecordDateTime": "01/13/2020, 12:40", "carePlanName": "NA - Gill, Pardeep ", "carePlanDateTime": "01/13/2020, 12:40", "xRayName": "NA - Gill, Pardeep ", "xRayDateTime": "01/13/2020, 12:40", "stickerName": "NA - Gill, Pardeep ", "stickerDateTime": "01/13/2020, 12:40", "2ndCheckName": "NA - Paradowska, Teresa ", "2ndCheckDateTime": "01/13/2020, 12:34" },

    { "homeName": "EDEN - Eden House Care Home", "homePhone": "1-519-856-4622", "homeFax": "1-519-856-1274", "pharmacyPhone": "1-844-316-7369", "pharmacyFax": "1-844-343-7369", "homeAreaName": "Wellington", "residentName": "Bates, Elizabeth", "prescriberName": "Karaul, Ameet", "unit": "Wellington", "room": "W2", "allergies": "Penicillins", "prescriberLicense": "105079", "residentDOB": "09/24/1940", "residentVC": "-", "residentHC": "3809543295", "currentDate": "12/30/2019", "currentTime": "15:52", "crushedMedsYes": "No", "crushedMedsNo": "Yes", "status": "EDITED", "orderNo": "Rx002213", "chkStartWithNextMedStrip": "", "orderType": "", "1stCheckName": "Peggy  Knox", "1stCheckDateTime": "12/30/2019, 15:53" }
  ];

  public compareJSON() {

  }
}
