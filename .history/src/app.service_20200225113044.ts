import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public plottingPoints = {
    "homeName": [970, 20, 1260, 45],
    "homePhone": [979, 74, 1115, 90],
    "homeFax": [970, 120, 1120, 145],
    "pharmacyPhone": [420, 70, 560, 92],
    "pharmacyFax": [420, 120, 562, 140],
    "homeAreaName": [595, 365, 780, 407],
    "residentName": [100, 295, 590, 340],
    "prescriberName": [595, 290, 1085, 338],
    "unit": [600, 365, 840, 405],
    "room": [845, 365, 1110, 405],
    "allergies": [110, 435, 1300, 480],
    "prescriberLicense": [960, 1156, 1300, 1210],
    "residentDOB": [1095, 290, 1300, 338],
    "residentVC": [350, 370, 590, 405],
    "residentHC": [100, 360, 350, 408],
    "currentDate": [100, 500, 340, 540],
    "currentTime": [350, 505, 830, 540],
    "status": [104, 720, 1335, 1025],
    "orderNo": [1390, 1510, 1360, 1770],
    "orderType": [104, 1120, 1355, 1150],
    "drugRecordName": [104, 1321, 290, 1355],
    "drugRecordDateTime": [340, 1320, 510, 1355],
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
  };

  public compareJSON(detectedJson, jsonToCompare) {
    this.writeToFile("******************************************************************\n\nFile Name :-  File  \n\n******************************************************************\n", 'mismatch.txt');
    for (let key in jsonToCompare) {
      let value = "";
      let actualValue: string = jsonToCompare[key];

      // actualValue = actualValue.replace(' ', "");
      let actualPoints = this.plottingPoints[key];
      if (!actualPoints) {
        console.log(key)
        continue;
      }

      let indexToDelete = [];
      for (let i = 0; i < detectedJson.length; i++) {
        let points = detectedJson[i].boundingPoly.vertices;
        if (points[0].x >= actualPoints[0] && points[0].y >= actualPoints[1] && points[2].x <= actualPoints[2] && points[2].y <= actualPoints[3]) {
          value = value + detectedJson[i].description;
          value = value.replace("|", "");
          indexToDelete.push(i);
          if (value == actualValue) {
            break;
          } else {
            value = value + " ";
          }
        }
      }
      if (value != actualValue) {
        let str = "\n";
        str += "key   =>    " + key + "\n";
        str += "Actual Value =>  " + actualValue + "\n";
        str += "Detected Value   =>   " + value + "\n";
        str += "==========================================================\n";
        // if (key != "residentVC") {
        this.writeToFile(str, 'mismatch.txt');
        // }
        console.log(str);
      } else {
        for (let index of indexToDelete) {
          //detectedJson.splice(index, 1);
        }
      }
    }
  }

  private writeToFile(str, filename) {
    fs.appendFile(join(__dirname, '../avatars/' + filename), str, (err) => {
      console.log(err);
    });
  }

  async detectText(fileUri) {
    const vision = require("@google-cloud/vision");
    const client = new vision.ImageAnnotatorClient();
    const [result] = await client.textDetection(
      //join(__dirname, "..", "/avatars/" + file.filename)
      fileUri
    );
    const detections = result.textAnnotations;
    return detections;
  }
}
