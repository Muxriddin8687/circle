import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile, ParseFilePipe, FileTypeValidator, MaxFileSizeValidator } from '@nestjs/common';
import { CircleService } from './circle.service';
import LocalFilesInterceptor from 'src/core/localFiles.interceptor';
import { CircleModel } from './circle.model';


@Controller('circle')
export class CircleController {
  constructor(private readonly circleService: CircleService) {}


  @Post('upload/:id')
  @UseInterceptors(
    LocalFilesInterceptor({ fieldName: 'image', path: 'circle/' })
  )
  upload(
    @Param('id') id: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }),
        ],
      })
    ) image: Express.Multer.File) {
    return this.circleService.uploadImage(+id, image.filename);
  }


  @Delete('image')
  deleteImage(@Query('imageName') imageName: string) {
    return this.circleService.deleteImage(imageName);
  }


  @Post()
  create(@Body() newData: CircleModel) {
    return this.circleService.create(newData);
  }


  @Get()
  findAll() {
    return this.circleService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.circleService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCircle: CircleModel) {
    return this.circleService.update(+id, updateCircle);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.circleService.remove(+id);
  }


}
