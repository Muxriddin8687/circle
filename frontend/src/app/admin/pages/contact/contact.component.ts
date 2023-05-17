import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  http = inject(HttpClient);
  sanitizer = inject(DomSanitizer);
  api = environment.api + "contact";
  iframeUrl: string = '';

  address: String = '';
  phone: String = '';
  email: String = '';



  load() {
    this.http.get(this.api).subscribe((res: any) => {
      this.address = res[0]["address"];
      this.phone = res[0]["phone"];
      this.email = res[0]["email"];
    });
  }

  save(form: NgForm) {
    this.http.post(this.api, form.value).subscribe((res) => {
      this.load();
      form.reset();
    });
  }

  ngOnInit(): void {
    this.load();
  }
}
