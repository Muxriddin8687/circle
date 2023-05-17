import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { CircleDetailsComponent } from './pages/circle-details/circle-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'circle', component: HomeComponent },
      { path: 'circle/:id', component: CircleDetailsComponent },

      { path: '', redirectTo: 'circle', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
