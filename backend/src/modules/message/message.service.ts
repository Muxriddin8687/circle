import { Injectable } from '@nestjs/common';
import { MessageModel } from './message.model';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';

@Injectable()
export class MessageService {
  constructor (@InjectClient() private readonly con: Connection) { }

  async create(createMessageDto: MessageModel) {
    const { name, phone, subject, message } = createMessageDto;
    return await this.con.query('INSERT INTO `message`(`name`, `phone`, `subject`, `message`) VALUES(?, ?, ?, ?)', [name, phone, subject, message]);
  }

  async findAll() {
    const messages = await this.con.query('SELECT * FROM `message` ORDER BY `date` DESC');
    return messages[0];
  }

  async remove(id: number) {
    return await this.con.query('DELETE FROM `message` WHERE id=?', id);
  }
}