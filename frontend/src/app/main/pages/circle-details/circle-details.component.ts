import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../../services/get-data.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-circle-details',
  templateUrl: './circle-details.component.html',
  styleUrls: ['./circle-details.component.scss']
})
export class CircleDetailsComponent {
  getDataService = inject(GetDataService);
  route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id');
  imgPath: string = './assets/images/circle/';
  circle: Array<any> = [];

  ngOnInit(): void {
    this.getDataService
      .circle()
      .pipe(map(item => item.filter((i: any) => i.id == this.id)))
      .subscribe(res => this.circle = res);
  }
}
