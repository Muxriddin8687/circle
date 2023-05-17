import { Component, inject } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sendMessageService = inject(MessageService);

  contact: any;
  show: boolean = false;


  sendMessage(form: NgForm) {
    if (form.valid)
      this.sendMessageService
        .sendMessage(form.value)
        .subscribe((res: any) => {
          if (res[0].affectedRows > 0) {
            this.show = true;
            form.reset();
          } else {
            console.log('Serverda xatolik yuz berdi!');
          }
        });
  }
}
