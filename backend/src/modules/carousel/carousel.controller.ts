import { Controller, Delete, FileTypeValidator, Get, MaxFileSizeValidator, Param, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CarouselService } from './carousel.service';
import LocalFilesInterceptor from 'src/core/localFiles.interceptor';

@Controller('carousel')
export class CarouselController {

  constructor(private readonly carouselService: CarouselService) { }


  @Post()
  @UseInterceptors(
    LocalFilesInterceptor({ fieldName: 'image', path: 'carousel/'})
  )
  create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }),
        ],
      })
    ) image: Express.Multer.File) {
    return this.carouselService.create(image);
  }

  @Get()
  findAll() {
    return this.carouselService.findAll();
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.carouselService.remove(name);
  }
}
