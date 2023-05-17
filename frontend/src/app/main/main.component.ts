import { Component, inject } from '@angular/core';
import { GetDataService } from './services/get-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  getAllData = inject(GetDataService);

  ngOnInit(): void {
    this.getAllData.load();
  }

}
