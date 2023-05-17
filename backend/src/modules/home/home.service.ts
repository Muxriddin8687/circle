import { Injectable } from '@nestjs/common';
import { HomeModel } from './home.model';
import { InjectClient } from 'nest-mysql';
import { ConfigService } from '@nestjs/config';
import { Connection } from 'mysql2';
import * as fs from 'fs';

@Injectable()
export class HomeService {
  imagePath = '';

  constructor(
    @InjectClient() private readonly con: Connection,
    private config: ConfigService
  ) {
    this.imagePath = config.get('imageSavePath') + "carousel/";
  }


  async findAll() {
    const images = await this.con.query('SELECT * FROM `home` WHERE id="1"');
    return images[0];
  }


  async update(data: HomeModel) {
    const oldData = await this.findAll();

    if(oldData.length == 1)
      return await this.con
        .query('UPDATE `home` SET `allPupils`=?, `activePupils`=?, `employees`=?, `year`=?, `mainTitle`=?, `mainText`=?  WHERE id="1"',
          [data.allPupils, data.activePupils, data.employees, data.year, data.mainTitle, data.mainText]);
    else
      return await this.con
        .query('INSERT INTO `home`(`id`, `allPupils`, `activePupils`, `employees`, `year`, `mainTitle`, `mainText`) VALUES(?, ?, ?, ?, ?, ?)',
          ['1', data.allPupils, data.activePupils, data.employees, data.year, data.mainTitle, data.mainText]);
  }


  async uploadImage(image) {
    const images = await this.con.query('SELECT * FROM `home` WHERE id="1"');
    if (images[0][0]['mainImage'].length > 0) {
      const imageUrl = this.imagePath + images[0][0]['mainImage'];

      fs.exists(imageUrl, (exist) => {
        if (exist) {
          fs.unlink(imageUrl, (err) => {
            if (err) {
              console.log(err);
              return err;
            } else {
              return this.con.query('UPDATE `home` SET `mainImage`=? WHERE id="1"', [image.filename]);
            }
          });
        } else {
          return this.con.query('UPDATE `home` SET `mainImage`=? WHERE id="1"', [image.filename]);
        }
      });
    }
    else
      return this.con.query('UPDATE `home` SET `mainImage`=? WHERE id="1"', [image.filename]);
  }


  async updateAboutUs(data: any) {
    return await this.con.query('UPDATE `home` SET `aboutUs`=? WHERE id="1"', [data.aboutUs]);
  }
}
