import { Component, inject } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-small-about-us',
  templateUrl: './small-about-us.component.html',
  styleUrls: ['./small-about-us.component.scss']
})
export class SmallAboutUsComponent {
  getDataService = inject(GetDataService);

  home$: any = this.getDataService.home();
}
