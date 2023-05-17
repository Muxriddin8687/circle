import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-circle-edit',
  templateUrl: './circle-edit.component.html',
  styleUrls: ['./circle-edit.component.scss']
})
export class CircleEditComponent {
  http = inject(HttpClient);
  router = inject(Router);
  route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id');
  api = environment.api + 'circle';
  imagePath = './assets/images/circle/';


  // member propertysid: number,
  subject: string = '';
  text: string = '';
  duration: string = '';
  when: string = '';
  price: string = '';
  image: any = '';


  load() {
    if (this.id != '0')
      this.http.get(this.api + '/' + this.id).subscribe(
        (res: any) => {
          if (res.length != 0) {
            this.subject = res[0]['subject'];
            this.text = res[0]['text'];
            this.duration = res[0]['duration'];
            this.when = res[0]['when'];
            this.price = res[0]['price'];
            this.text = res[0]['text'];
            this.image = res[0]['images'];
          } else
            this.router.navigateByUrl("/admin/circle");
        },
        (err) => this.router.navigateByUrl("/admin/circle")
      );
  }


  // image upload for member
  onFileChange(event: any) {
    let formData = new FormData();
    formData.append('image', event.target.files[0], event.target.files[0].name);

    this.http
      .post(`${this.api}/upload/${this.id}`, formData)
      .subscribe(res => {
        this.load();
      });
  }


  deleteImage(imageName: string) {
    this.http.delete(this.api + '/image?imageName=' + imageName).subscribe((res) => this.load());
  }


  update(form: NgForm) {
    this.http.patch(this.api + '/' + this.id, form.value).subscribe((res) => {
      this.router.navigateByUrl("/admin/circle");
    });
  }


  ngOnInit(): void {
    this.load();
  }
}
