import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Connection } from 'mysql2';
import * as fs from 'fs';
import { InjectClient } from 'nest-mysql';

@Injectable()
export class CarouselService {
    imagePath = '';

    constructor(
        @InjectClient() private readonly con: Connection,
        private config: ConfigService
    ) {
        this.imagePath = config.get('imageSavePath') + "carousel/";
    }

    async create(image) {
        return await this.con.query('INSERT INTO `carousel`(`name`) VALUES(?)', [image.filename]);
    }

    async findAll() {
        const images = await this.con.query('SELECT * FROM `carousel`');
        return images[0];
    }

    async remove(fileName: String) {
        fs.unlink(this.imagePath + fileName, (err) => {
            if (err) {
                console.log(err);
                return err;
            } else {
                return this.con.query('DELETE FROM `carousel` WHERE name=?', fileName);
            }
        });
    }
}
