import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  http = inject(HttpClient);
  api = environment.api;
  imgUrl = './assets/images/carousel/';

  // short about us form propertys
  title: String = '';
  text: String = '';
  image: String = '';

  // informations propertys
  allPupils: String = '';
  activePupils: String = '';
  employees: String = '';
  year: String = '';

  imageList: any;


  ngOnInit(): void {
    this.load();
  }


  // load all data from backend
  load() {
    // load carousel images
    this.http
        .get(this.api + 'carousel')
        .subscribe( res => this.imageList = res);

    // load main-bar details
    this.http
        .get(this.api + 'home')
        .subscribe( (res: any) => {
          this.title = res[0].mainTitle;
          this.text = res[0].mainText;
          this.image = res[0].mainImage;
          this.allPupils = res[0].allPupils;
          this.activePupils = res[0].activePupils;
          this.employees = res[0].employees;
          this.year = res[0].year;
        });
  }


  // image upload for carousel section
  onFileChange(event: any) {
    let formData = new FormData();
    formData.append('image', event.target.files[0], event.target.files[0].name);

    this.http
        .post(`${this.api}carousel`, formData)
        .subscribe(res => {
          this.load();
        });
  }


  // delete carousel image
  deleteImage(name: String) {
    this.http
        .delete(this.api + 'carousel/' + name)
        .subscribe(() => this.load());
  }


  // image upload for main-bar section
  onFileChangeAbout(event: any) {
    let formData = new FormData();
    formData.append('image', event.target.files[0], event.target.files[0].name);

    this.http
        .post(`${this.api}home`, formData)
        .subscribe(res => {
          this.load();
        });
  }


  // save main title and text
  saveMainData() {
    let formData = {
      'mainTitle': this.title,
      'mainText': this.text,
      'allPupils': this.allPupils,
      'activePupils': this.activePupils,
      'employees': this.employees,
      'year': this.year
    };

    this.http
        .patch(`${this.api}home`, formData)
        .subscribe(res => {
          this.load();
        });
  }

}
