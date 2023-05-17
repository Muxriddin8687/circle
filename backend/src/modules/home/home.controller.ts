import { Controller, Get, Post, Body, Patch, UploadedFile, ParseFilePipe, FileTypeValidator, MaxFileSizeValidator, UseInterceptors } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeModel } from './home.model';
import LocalFilesInterceptor from 'src/core/localFiles.interceptor';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}


  @Post()
  @UseInterceptors(
    LocalFilesInterceptor({ fieldName: 'image', path: 'carousel/'})
  )
  uploadImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }),
        ],
      })
    ) image: Express.Multer.File) {
    return this.homeService.uploadImage(image);
  }


  @Get()
  findAll() {
    return this.homeService.findAll();
  }


  @Patch()
  update(@Body() updateHomeDto: HomeModel) {
    return this.homeService.update(updateHomeDto);
  }


  @Post('aboutUs')
  updateAboutUs(@Body() data: any) {
    return this.homeService.updateAboutUs(data);
  }
}
