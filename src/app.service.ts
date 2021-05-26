import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { basename, extname, join } from 'path';
import * as decompress from "decompress";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public plottingPoints1 = {
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

  public plottingPoints = {
    line1: {
      "centerNo": {
        search: "",
        start: 150,
        end: 480,
        line: 1
      },
      "schoolId": {
        search: "",
        start: 360,
        end: 703,
        line: 1
      },
      "regNo": {
        search: "",
        start: 583,
        end: 956,
        line: 1
      },
      name: {
        search: "",
        start: 800,
        end: 2223,
        line: 1
      },
      dob: {
        search: "",
        start: 2100,
        end: 2486,
        line: 1
      },
      cast: {
        search: "",
        start: 2350,
        end: 2531,
        line: 1
      },
      sub1: {
        search: "",
        start: 2411,
        end: 2849,
        line: 1
      },
      sub2: {
        search: "",
        start: 2716,
        end: 3090,
        line: 1
      },
      sub3: {
        search: "",
        start: 2970,
        end: 3334,
        line: 1
      },
      sub4: {
        search: "",
        start: 3214,
        end: 3579,
        line: 1
      },
      sub5: {
        search: "",
        start: 3444,
        end: 3806,
        line: 1
      },
      sub6: {
        search: "",
        start: 3686,
        end: 4121,
        line: 1
      },
      total: {
        search: "",
        start: 3916,
        end: 4204,
        line: 1
      },

      result: {
        search: "",
        start: 4115,
        end: 4260,
        line: 1
      },
      percentage: {
        search: "%",
        start: 3873,
        end: 4204
      },
    },
    line2: {
      fatherName: {
        search: "",
        start: 818,
        end: 2223,
        line: 2
      },
      result: {
        search: "",
        start: 4115,
        end: 4260,
        line: 2
      },
      percentage: {
        search: "%",
        start: 3873,
        end: 4204
      },
    },
    line3: {
      motherName: {
        search: "",
        start: 836,
        end: 2223,
        line: 3
      },
      result: {
        search: "",
        start: 4115,
        end: 4260,
        line: 3
      },
      schoolId2: {
        search: "",
        start: 360,
        end: 956,
        line: 3
      },

      mark1: {
        search: "",
        start: 2411,
        end: 2849,
        line: 3
      },
      mark2: {
        search: "",
        start: 2729,
        end: 3090,
        line: 3
      },
      mark3: {
        search: "",
        start: 2960,
        end: 3334,
        line: 3
      },
      mark4: {
        search: "",
        start: 3214,
        end: 3579,
        line: 3
      },
      mark5: {
        search: "",
        start: 3459,
        end: 3806,
        line: 3
      },
      mark6: {
        search: "",
        start: 3686,
        end: 4026,
        line: 3
      },
      percentage: {
        search: "%",
        start: 3873,
        end: 4204
      }
    },
    line4: {
      percentage: {
        search: "%",
        start: 3873,
        end: 4204
      }
    }
  }

  public compareJSON(detectedJson, jsonToCompare) {
    this.writeToFile("******************************************************************\n\nFile Name :-  File  \n\n******************************************************************\n", 'mismatch.txt');
    for (let key in jsonToCompare) {
      let value = "";
      let actualValue: string = jsonToCompare[key];

      // actualValue = actualValue.replace(' ', "");
      let actualPoints = this.plottingPoints[key];
      if (!actualPoints) {
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

  async makeReadableJSON(detections) {
    let jsonData = [];
    let currentLine = 1;
    let lineHeight = 40;
    let recordStartPixel = 0;
    let json = {};
    let isFirstLine = true;
    for (let i = 0; i < detections.length; i++) {
      for (let j = i + 1; j < detections.length; j++) {
        if (detections[i].boundingPoly.vertices[0].y > detections[j].boundingPoly.vertices[0].y) {
          let tmp = detections[i];
          detections[i] = detections[j];
          detections[j] = tmp;
        }
      }
    }


    for (let [index, data] of detections.entries()) {
      if (data.boundingPoly.vertices[0].y < 270) {
        continue;
      }
      if (isFirstLine) {
        currentLine = 1;
        isFirstLine = false;
        json = {};
        recordStartPixel = data.boundingPoly.vertices[0].y;
      } else {
        if (data.boundingPoly.vertices[0].y > (recordStartPixel + (lineHeight * 5))) {
          currentLine = 1;
          jsonData.push(json);
          json = {};
          recordStartPixel = data.boundingPoly.vertices[0].y;
        }
      }
      if (data.boundingPoly.vertices[0].y > (recordStartPixel + (lineHeight * 3))) {
        currentLine = 4;
      } else if (data.boundingPoly.vertices[0].y > (recordStartPixel + (lineHeight * 2))) {
        currentLine = 3;
      } else if (data.boundingPoly.vertices[0].y > (recordStartPixel + (lineHeight * 1))) {
        currentLine = 2;
      } else {
        currentLine = 1;
      }
      let fieldName = `line${currentLine}`;
      for (let key in this.plottingPoints[fieldName]) {
        // console.log(key)
        if (data.boundingPoly.vertices[0].x >= this.plottingPoints[fieldName][key].start && data.boundingPoly.vertices[1].x <= this.plottingPoints[fieldName][key].end) {
          if (key == "percentage") {
            if (data.description.includes(this.plottingPoints[fieldName][key].search)) {
              if (json[key]) {
                json[key] += data.description;
              } else {
                json[key] = data.description;
              }
            } else {
              continue;
            }
          } else {
            if (json[key]) {
              json[key] += data.description;
            } else {
              json[key] = data.description;
            }
          }
        }
      }
    }
    jsonData.push(json);

    return jsonData;
  }

  async processZipFile(file) {
    let fileName = basename(file.filename, extname(file.filename));
    let files = await decompress(join(__dirname, "..", file.path), join(__dirname, "..", `/results/${fileName}`));
    global["filedata"][fileName] = {};
    for (let fileData of files) {
      if (fileData.type != "file") {
        continue;
      }
      const vision = require("@google-cloud/vision");
      const client = new vision.ImageAnnotatorClient();
      const [result] = await client.textDetection(
        join(__dirname, "..", "/results/" + fileName + "/" + fileData.path)
        //'https://cloud.google.com/vision/docs/images/sign_text.png'
      );
      const detections = result.textAnnotations;
      const json = await this.makeReadableJSON(detections);
      global["filedata"][fileName][fileData.path] = {
        data: json
      };
    }
    fs.unlinkSync(join(__dirname, "..", file.path));
    fs.unlinkSync(join(__dirname, "..", `/results/${fileName}`));
  }

  async makeReadableJOSNTwo(detections) {
    let jsonData = [];
    let currentLine = 1;
    let lineHeight = 40;
    let recordStartPixel = 0;
    let lineStartPoint = 0;
    let lineEndPoint = 0;
    let json = {};
    let isFirstLine = true;

    for (let i = 0; i < detections.length; i++) {
      for (let j = i + 1; j < detections.length; j++) {
        if (detections[i].boundingPoly.vertices[0].x > detections[j].boundingPoly.vertices[0].x) {
          let tmp = detections[i];
          detections[i] = detections[j];
          detections[j] = tmp;
        }
      }
    }

    for (let i = 0; i < detections.length; i++) {
      for (let j = i + 1; j < detections.length; j++) {
        if (detections[i].boundingPoly.vertices[0].y > detections[j].boundingPoly.vertices[0].y) {
          let tmp = detections[i];
          detections[i] = detections[j];
          detections[j] = tmp;
        }
      }
    }
    for (let data of detections) {
      if (lineStartPoint > data.boundingPoly.vertices[0].x || lineStartPoint == 0) {
        lineStartPoint = data.boundingPoly.vertices[0].x;
      }
      if (lineEndPoint < data.boundingPoly.vertices[1].x) {
        lineEndPoint = data.boundingPoly.vertices[1].x;
      }
      if (data.boundingPoly.vertices[0].y > 270) {
        break;
      }
    }
    console.log(lineStartPoint, lineEndPoint);

    return detections;

    for (let [index, data] of detections.entries()) {
      if (data.boundingPoly.vertices[0].y < 270) {
        continue;
      }
      if (isFirstLine) {
        currentLine = 1;
        isFirstLine = false;
        json = {};
        recordStartPixel = data.boundingPoly.vertices[0].y;
      } else {
        if (data.boundingPoly.vertices[0].y > (recordStartPixel + (lineHeight * 5))) {
          currentLine = 1;
          jsonData.push(json);
          json = {};
          recordStartPixel = data.boundingPoly.vertices[0].y;
        }
      }
      if (data.boundingPoly.vertices[0].y > (recordStartPixel + (lineHeight * 3))) {
        currentLine = 4;
      } else if (data.boundingPoly.vertices[0].y > (recordStartPixel + (lineHeight * 2))) {
        currentLine = 3;
      } else if (data.boundingPoly.vertices[0].y > (recordStartPixel + (lineHeight * 1))) {
        currentLine = 2;
      } else {
        currentLine = 1;
      }
      console.log(currentLine);
      let fieldName = `line${currentLine}`;
      for (let key in this.plottingPoints[fieldName]) {
        // console.log(key)
        if (data.boundingPoly.vertices[0].x >= this.plottingPoints[fieldName][key].start && data.boundingPoly.vertices[1].x <= this.plottingPoints[fieldName][key].end) {
          console.log("Condition pass");
          if (key == "percentage") {
            console.log(this.plottingPoints[fieldName][key].search)
            if (data.description.includes(this.plottingPoints[fieldName][key].search)) {
              if (json[key]) {
                json[key] += data.description;
              } else {
                json[key] = data.description;
              }
            } else {
              continue;
            }
          } else {
            if (json[key]) {
              json[key] += data.description;
            } else {
              json[key] = data.description;
            }
          }
        }
      }
    }
    jsonData.push(json);

    return jsonData;
  }
}
