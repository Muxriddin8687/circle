import { Injectable } from '@nestjs/common';
import { ContactModel } from './contact.model';
import { InjectClient } from 'nest-mysql';
import { Connection } from 'mysql2';

@Injectable()
export class ContactService {

  constructor(@InjectClient() private readonly con: Connection) { }


  async create(data: ContactModel) {

    const oldData = await this.findAll();

    if(oldData.length == 1)
      return this.con.query('UPDATE `contact` SET `address`=?, `phone`=?, `email`=? WHERE id="1"',
        [data.address, data.phone, data.email]);
    else
      return this.con.query('INSERT INTO `contact`(`id`, `address`, `phone`, `email`) VALUES(?, ?, ?, ?)',
        ["1", data.address, data.phone, data.email]);
  }

  async findAll() {
    const news = await this.con.query('SELECT * FROM `contact` WHERE id="1"');
    return news[0];
  }
}
