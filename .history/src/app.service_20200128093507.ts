import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public plottingPoints = {
    "homeName": [979, 20, 1260, 35],
    "homePhone": [979, 74, 1115, 90],
    "homeFax": [979, 123, 1115, 139],
    "pharmacyPhone": [420, 80, 555, 85],
    "pharmacyFax": [420, 125, 555, 140],
    "homeAreaName": [600, 368, 775, 405],
    "residentName": [100, 300, 590, 340],
    "prescriberName": [600, 290, 1085, 300],
    "unit": [600, 365, 840, 405],
    "room": [845, 365, 1110, 405],
    "allergies": [110, 435, 1300, 470],
    "prescriberLicense": [960, 1156, 1300, 1210],
    "residentDOB": [1095, 300, 1300, 335],
    "residentVC": [350, 370, 590, 405],
    "residentHC": [104, 370, 350, 405],
    "currentDate": [104, 505, 340, 540],
    "currentTime": [350, 505, 830, 540],
    "status": [104, 720, 1335, 1025],
    "orderNo": [1390, 1520, 1354, 1762],
    "orderType": [104, 1120, 1355, 1150],
    "drugRecordName": [104, 1321, 290, 1355],
    "drugRecordDateTime": [340, 1330, 510, 1355],
    "consentName": [515, 1320, 750, 1345],
    "consentDateTime": [760, 1325, 920, 1345],
    "eBoxName": [930, 1320, 1150, 1350],
    "eBoxDateTime": [1150, 1320, 1340, 1350],
    "carePlanName": [110, 1390, 330, 1420],
    "carePlanDateTime": [340, 1390, 510, 1420],
    "xRayName": [510, 1390, 745, 1420],
    "xRayDateTime": [750, 1390, 920, 1420],
    "stickerName": [925, 1390, 1160, 1420],
    "stickerDateTime": [1170, 1390, 1340, 1420],
    "2ndCheckDateTime": [340, 1390, 510, 1420],
    "2ndCheckName": [110, 1390, 335, 1420]
  }
};

  private comparableJson = [
  { "homeName": "EDEN - Eden House Care Home", "homePhone": "1-519-856-4622", "homeFax": "1-519-856-1274", "pharmacyPhone": "1-844-316-7369", "pharmacyFax": "1-844-343-7369", "homeAreaName": "Wellington", "residentName": "Aydoner, Hatice", "prescriberName": "Karaul, Ameet", "unit": "Wellington", "room": "W4", "allergies": "No Known Allergies", "prescriberLicense": "105079", "residentDOB": "03/15/1941", "residentVC": "-", "residentHC": "9938100378", "currentDate": "01/15/2020", "currentTime": "12:30", "crushedMedsYes": "No", "crushedMedsNo": "Yes", "status": "EDITED", "orderNo": "Rx002258", "chkStartWithNextMedStrip": "", "orderType": "VO/TO by Knox, Peggy (Nurse)", "drugRecordName": "Gill, Pardeep ", "drugRecordDateTime": "01/15/2020, 12:34" },

  { "homeName": "EDEN - Eden House Care Home", "homePhone": "1-519-856-4622", "homeFax": "1-519-856-1274", "pharmacyPhone": "1-844-316-7369", "pharmacyFax": "1-844-343-7369", "homeAreaName": "Wellington", "residentName": "Aydoner, Hatice", "prescriberName": "Karaul, Ameet", "unit": "Wellington", "room": "W4", "allergies": "No Known Allergies", "prescriberLicense": "105079", "residentDOB": "03/15/1941", "residentVC": "-", "residentHC": "9938100378", "currentDate": "01/13/2020", "currentTime": "13:40", "crushedMedsYes": "No", "crushedMedsNo": "Yes", "status": "", "orderNo": "", "chkStartWithNextMedStrip": "", "orderType": "VO/TO by Knox, Peggy (RN)", "1stCheckName": "NA - Gill, Pardeep ", "1stCheckDateTime": "01/13/2020, 14:01", "consentName": "NA - Gill, Pardeep ", "consentDateTime": "01/13/2020, 14:02", "eBoxName": "Gill, Pardeep ", "eBoxDateTime": "01/13/2020, 14:00", "drugRecordName": "Gill, Pardeep ", "drugRecordDateTime": "01/13/2020, 14:01", "carePlanName": "NA - Gill, Pardeep ", "carePlanDateTime": "01/13/2020, 14:01", "xRayName": "NA - Gill, Pardeep ", "xRayDateTime": "01/13/2020, 14:01", "stickerName": "NA - Gill, Pardeep ", "stickerDateTime": "01/13/2020, 14:01" },

  { "homeName": "EDEN - Eden House Care Home", "homePhone": "1-519-856-4622", "homeFax": "1-519-856-1274", "pharmacyPhone": "1-844-316-7369", "pharmacyFax": "1-844-343-7369", "homeAreaName": "Wellington", "residentName": "Aydoner, Hatice", "prescriberName": "Karaul, Ameet", "unit": "Wellington", "room": "W4", "allergies": "No Known Allergies", "prescriberLicense": "105079", "residentDOB": "03/15/1941", "residentVC": "-", "residentHC": "9938100378", "currentDate": "01/13/2020", "currentTime": "11:51", "crushedMedsYes": "No", "crushedMedsNo": "Yes", "status": "", "orderNo": "", "chkStartWithNextMedStrip": "", "orderType": "VO/TO by Knox, Peggy (RN)", "1stCheckName": "NA - Gill, Pardeep ", "1stCheckDateTime": "01/13/2020, 12:24", "consentName": "", "consentDateTime": "", "eBoxName": "NA - Gill, Pardeep ", "eBoxDateTime": "01/13/2020, 12:40", "drugRecordName": "NA - Gill, Pardeep ", "drugRecordDateTime": "01/13/2020, 12:40", "carePlanName": "NA - Gill, Pardeep ", "carePlanDateTime": "01/13/2020, 12:40", "xRayName": "NA - Gill, Pardeep ", "xRayDateTime": "01/13/2020, 12:40", "stickerName": "NA - Gill, Pardeep ", "stickerDateTime": "01/13/2020, 12:40", "2ndCheckName": "NA - Paradowska, Teresa ", "2ndCheckDateTime": "01/13/2020, 12:34" },

  { "homeName": "EDEN - Eden House Care Home", "homePhone": "1-519-856-4622", "homeFax": "1-519-856-1274", "pharmacyPhone": "1-844-316-7369", "pharmacyFax": "1-844-343-7369", "homeAreaName": "Wellington", "residentName": "Bates, Elizabeth", "prescriberName": "Karaul, Ameet", "unit": "Wellington", "room": "W2", "allergies": "Penicillins", "prescriberLicense": "105079", "residentDOB": "09/24/1940", "residentVC": "-", "residentHC": "3809543295", "currentDate": "12/30/2019", "currentTime": "15:52", "crushedMedsYes": "No", "crushedMedsNo": "Yes", "status": "EDITED", "orderNo": "Rx002213", "chkStartWithNextMedStrip": "", "orderType": "", "1stCheckName": "Peggy  Knox", "1stCheckDateTime": "12/30/2019, 15:53" }
];

  public compareJSON(detectedJson, index) {
  let jsonToCompare = this.comparableJson[index];
  for (let key in jsonToCompare) {
    let value = "";
    let actualValue = jsonToCompare[key].replace(" ", "");
    let actualPoints = this.plottingPoints[key];
    for (let i = 0; i < detectedJson.length; i++) {
      let points = detectedJson[i].boundingPoly.vertices;
      if (points[0].x >= actualPoints[0] && points[0].y >= actualPoints[1] && points[2].x <= actualPoints[2] && points[2].y <= actualPoints[3]) {
        value += detectedJson[i].description;
        detectedJson.splice(i, 1);
      }
      if (value == actualValue) {
        break;
      }
    }
    if (value != actualValue) {
      console.log("=========================================================");
      console.log("key   =>  " + key);
      console.log("Actual Value =>  " + actualValue);
      console.log("Detected Value   =>   " + value);
      console.log("==========================================================");
      console.log("\n")
    }
  }
}
}
