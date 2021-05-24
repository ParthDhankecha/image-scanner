import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  Body
} from "@nestjs/common";
import { AppService } from "./app.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname, join } from "path";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  private comparableJson = [
    { "homeName": "EDEN - Eden House Care Home", "homePhone": "1-519-856-4622", "homeFax": "1-519-856-1274", "pharmacyPhone": "1-844-316-7369", "pharmacyFax": "1-844-343-7369", "homeAreaName": "Wellington", "residentName": "Aydoner, Hatice", "prescriberName": "Karaul, Ameet", "unit": "Wellington", "room": "W4", "allergies": "No Known Allergies", "prescriberLicense": "105079", "residentDOB": "03/15/1941", "residentVC": "-", "residentHC": "9938100378", "currentDate": "01/15/2020", "currentTime": "12:30", "crushedMedsYes": "No", "crushedMedsNo": "Yes", "status": "EDITED", "orderNo": "Rx002258", "chkStartWithNextMedStrip": "", "orderType": "VO/TO by Knox, Peggy (Nurse)", "drugRecordName": "Gill, Pardeep ", "drugRecordDateTime": "01/15/2020, 12:34" },

    { "homeName": "EDEN - Eden House Care Home", "homePhone": "1-519-856-4622", "homeFax": "1-519-856-1274", "pharmacyPhone": "1-844-316-7369", "pharmacyFax": "1-844-343-7369", "homeAreaName": "Wellington", "residentName": "Aydoner, Hatice", "prescriberName": "Karaul, Ameet", "unit": "Wellington", "room": "W4", "allergies": "No Known Allergies", "prescriberLicense": "105079", "residentDOB": "03/15/1941", "residentVC": "-", "residentHC": "9938100378", "currentDate": "01/13/2020", "currentTime": "13:40", "crushedMedsYes": "No", "crushedMedsNo": "Yes", "status": "", "orderNo": "", "chkStartWithNextMedStrip": "", "orderType": "VO/TO by Knox, Peggy (RN)", "1stCheckName": "NA - Gill, Pardeep ", "1stCheckDateTime": "01/13/2020, 14:01", "consentName": "NA - Gill, Pardeep ", "consentDateTime": "01/13/2020, 14:02", "eBoxName": "Gill, Pardeep ", "eBoxDateTime": "01/13/2020, 14:00", "drugRecordName": "Gill, Pardeep ", "drugRecordDateTime": "01/13/2020, 14:01", "carePlanName": "NA - Gill, Pardeep ", "carePlanDateTime": "01/13/2020, 14:01", "xRayName": "NA - Gill, Pardeep ", "xRayDateTime": "01/13/2020, 14:01", "stickerName": "NA - Gill, Pardeep ", "stickerDateTime": "01/13/2020, 14:01" },

    { "homeName": "EDEN - Eden House Care Home", "homePhone": "1-519-856-4622", "homeFax": "1-519-856-1274", "pharmacyPhone": "1-844-316-7369", "pharmacyFax": "1-844-343-7369", "homeAreaName": "Wellington", "residentName": "Aydoner, Hatice", "prescriberName": "Karaul, Ameet", "unit": "Wellington", "room": "W4", "allergies": "No Known Allergies", "prescriberLicense": "105079", "residentDOB": "03/15/1941", "residentVC": "-", "residentHC": "9938100378", "currentDate": "01/13/2020", "currentTime": "11:51", "crushedMedsYes": "No", "crushedMedsNo": "Yes", "status": "", "orderNo": "", "chkStartWithNextMedStrip": "", "orderType": "VO/TO by Knox, Peggy (RN)", "1stCheckName": "NA - Gill, Pardeep ", "1stCheckDateTime": "01/13/2020, 12:24", "consentName": "", "consentDateTime": "", "eBoxName": "NA - Gill, Pardeep ", "eBoxDateTime": "01/13/2020, 12:40", "drugRecordName": "NA - Gill, Pardeep ", "drugRecordDateTime": "01/13/2020, 12:40", "carePlanName": "NA - Gill, Pardeep ", "carePlanDateTime": "01/13/2020, 12:40", "xRayName": "NA - Gill, Pardeep ", "xRayDateTime": "01/13/2020, 12:40", "stickerName": "NA - Gill, Pardeep ", "stickerDateTime": "01/13/2020, 12:40", "2ndCheckName": "NA - Paradowska, Teresa ", "2ndCheckDateTime": "01/13/2020, 12:34" },

    { "homeName": "EDEN - Eden House Care Home", "homePhone": "1-519-856-4622", "homeFax": "1-519-856-1274", "pharmacyPhone": "1-844-316-7369", "pharmacyFax": "1-844-343-7369", "homeAreaName": "Wellington", "residentName": "Bates, Elizabeth", "prescriberName": "Karaul, Ameet", "unit": "Wellington", "room": "W2", "allergies": "Penicillins", "prescriberLicense": "105079", "residentDOB": "09/24/1940", "residentVC": "-", "residentHC": "3809543295", "currentDate": "12/30/2019", "currentTime": "15:52", "crushedMedsYes": "No", "crushedMedsNo": "Yes", "status": "EDITED", "orderNo": "Rx002213", "chkStartWithNextMedStrip": "", "orderType": "", "1stCheckName": "Peggy  Knox", "1stCheckDateTime": "12/30/2019, 15:53" }
  ];

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * 
   * @param file 
   * 
   * For Default Login :- 'gcloud auth application-default login'
   * 
   * Install google cloud shell and gcloud init
   * 
   * export google credential variable values then restart server and terminal
   */

  @Post()
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./avatars",
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join("");
          return cb(null, `${randomName}${extname(file.originalname)}`);
        }
      })
    })
  )
  async uploadFile(@UploadedFile() file) {
    console.log(file);

    const vision = require("@google-cloud/vision");
    const client = new vision.ImageAnnotatorClient();
    const [result] = await client.textDetection(
      join(__dirname, "..", "/avatars/" + file.filename)
      //'https://cloud.google.com/vision/docs/images/sign_text.png'
    );
    const detections = result.textAnnotations;
    const json = await this.appService.makeReadableJSON(detections);
    // this.appService.compareJSON(detections, this.comparableJson[0]);

    // /** Node Tesseract code */

    // const tesseract = require("node-tesseract-ocr")

    // const config = {
    //   lang: "eng",
    //   oem: 1,
    //   psm: 3,
    //   json: 1
    // }

    // let text = await tesseract.recognize(join(__dirname, "..", "/avatars/" + file.filename), config)

    return { status: 1, message: "Image uploaded successfully.", data: json };
    // return { status: 1, message: "Image uploaded successfully.", data: detections };

  }


  @Post('compare-json')
  async compareJSON(@Body() data) {
    let detectedJson = await this.appService.detectText(data.url);
    this.appService.compareJSON(detectedJson, data.compareJSON);
  }
}
