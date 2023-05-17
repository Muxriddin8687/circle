import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  http = inject(HttpClient);
  api = environment.api;

  sendMessage(form: any) {
    return this.http.post(this.api + 'message', form);
  }
}
