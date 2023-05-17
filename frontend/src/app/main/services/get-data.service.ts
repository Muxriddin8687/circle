import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  http = inject(HttpClient);
  api = environment.api;

  private readonly carousel$$ = new BehaviorSubject([]);
  private readonly home$$ = new BehaviorSubject([]);
  private readonly contact$$ = new BehaviorSubject([]);
  private readonly circle$$ = new BehaviorSubject([]);


  load() {
    this.http.get(this.api + 'carousel').subscribe((res: any) => this.carousel$$.next(res));
    this.http.get(this.api + 'home').subscribe((res: any) => this.home$$.next(res));
    this.http.get(this.api + 'contact').subscribe((res: any) => this.contact$$.next(res));
    this.http.get(this.api + 'circle').subscribe((res: any) => this.circle$$.next(res));
  }


  carousel() {
    return this.carousel$$.asObservable();
  }

  home() {
    return this.home$$.asObservable();
  }
  
  contact() {
    return this.contact$$.asObservable();
  }

  circle() {
    return this.circle$$.asObservable();
  }
}
