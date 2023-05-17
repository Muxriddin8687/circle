import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environments';
import { CircleModel } from './circle.model';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent {

  http = inject(HttpClient);
  api = environment.api + 'circle';
  circles: CircleModel[] = [];


  load() {
    this.http.get<CircleModel[]>(this.api).subscribe((res: CircleModel[]) => this.circles = res);
  }


  delete(id: number) {
    this.http.delete(this.api + '/' + id).subscribe((res) => {
      this.load();
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
