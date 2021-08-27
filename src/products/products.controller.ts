import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Products } from './products.entity';

@Controller('products')
export class ProductsController {
  @Post()
  @UseInterceptors(FilesInterceptor('image'))
  postProduct(@UploadedFiles() file: Express.Multer.File) {
    console.log(file);
  }
}
