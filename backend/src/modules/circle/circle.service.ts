import { Injectable } from '@nestjs/common';
import { InjectClient } from 'nest-mysql';
import { Connection } from 'mysql2';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import { CircleModel } from './circle.model';

@Injectable()
export class CircleService {
    imagePath = '';

    constructor(
        @InjectClient() private readonly con: Connection,
        private config: ConfigService
    ) {
        this.imagePath = config.get('imageSavePath') + "circle/";
    }


    async create(data: CircleModel) {
        return this.con.query('INSERT `circle`(`subject`, `duration`, `when`, `price`) VALUES (?, ?, ?, ?)', [data.subject, data.duration, data.when, data.price]);
    }


    async findAll() {
        const circles = await this.con.query('SELECT * FROM `circle` ORDER BY `date` DESC');
        const images = await this.con.query('SELECT * FROM `images_of_circle`');

        let circle = circles[0];
        let image = images[0]

        let newArrar: Array<any> = [];
        for (let i = 0; i < circle.length; i++) {
            let data = {
                id: circle[i]['id'],
                subject: circle[i]['subject'],
                duration: circle[i]['duration'],
                when: circle[i]['when'],
                price: circle[i]['price'],
                text: circle[i]['text'],
                images: []
            };
            image.forEach(item => {
                if (item.circle_id == circle[i]['id'])
                    data.images.push(item.imageName);
            });
            image.map(item => item.circle_id != circle[i]['id']);
            newArrar.push(data);
        }

        return newArrar;
    }


    async findOne(id: number) {
        const circles = await this.con.query('SELECT * FROM `circle` WHERE id=?', id);
        const images = await this.con.query('SELECT * FROM `images_of_circle` WHERE circle_id=?', id);

        let circle = circles[0];
        let image = images[0]

        let newArrar: Array<any> = [];
        for (let i = 0; i < circle.length; i++) {
            let data = {
                id: circle[i]['id'],
                subject: circle[i]['subject'],
                duration: circle[i]['duration'],
                when: circle[i]['when'],
                price: circle[i]['price'],
                text: circle[i]['text'],
                images: []
            };
            image.forEach(item => {
                data.images.push(item.imageName);
            });
            newArrar.push(data);
        }

        return newArrar;
    }


    async update(id: number, data: CircleModel) {
        return await this.con
            .query('UPDATE circle SET `subject`=?, `text`=?, `duration`=?, `when`=?, `price`=? WHERE id=?',
                [data.subject, data.text,  data.duration,  data.when,  data.price, id]);
    }


    async remove(id: number) {
        return await this.con.query('DELETE FROM circle WHERE `id`=?', id);
    }


    async uploadImage(id: number, image: string) {
        return this.con.query('INSERT `images_of_circle`(`imageName`, `circle_id`) VALUES (?, ?)', [image, id]);
    }


    async deleteImage(imageName: string) {
        await this.con.query('DELETE FROM `images_of_circle` WHERE `imageName`=?', imageName);
        fs.unlink(this.imagePath + imageName, (err) => { });
        return true;
    }

}  

