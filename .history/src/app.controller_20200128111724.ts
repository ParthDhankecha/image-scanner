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
    FileInterceptor("avatar", {
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
      //join(__dirname, "..", "/avatars/" + file.filename)
      'https://cloud.google.com/vision/docs/images/sign_text.png'
    );
    const detections = result.textAnnotations;
    console.log("Text:");
    detections.forEach(text => console.log(text));

    // /** Node Tesseract code */

    // const tesseract = require("node-tesseract-ocr")

    // const config = {
    //   lang: "eng",
    //   oem: 1,
    //   psm: 3,
    //   json: 1
    // }

    // let text = await tesseract.recognize(join(__dirname, "..", "/avatars/" + file.filename), config)

    return { status: 1, message: "Image uploaded successfully.", data: detections };
  }


  @Post('compare-json')
  compareJSON(@Body() data) {

    this.appService.compareJSON(data, 0)
  }
}
