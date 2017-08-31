import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';

import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService} from './process-httpmsg.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/operator/delay';
import 'rxjs/operator/catch';

@Injectable()
export class DishService {

  constructor(private http: Http,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get(baseURL + 'dishes')
      .map(res => { return this.processHTTPMsgService.extractData(res); });
  }
  
  getDish(id: number): Observable<Dish> {
    return  this.http.get(baseURL + 'dishes/'+ id)
                    .map(res => { return this.processHTTPMsgService.extractData(res); });
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get(baseURL + 'dishes?featured=true')
                    .map(res => { return this.processHTTPMsgService.extractData(res)[0]; });
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => { return dishes.map(dish => dish.id) });
  }

}
