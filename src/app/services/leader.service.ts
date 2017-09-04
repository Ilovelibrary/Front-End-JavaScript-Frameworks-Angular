import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS} from '../shared/leaders';

import { Observable } from 'rxjs/Rx';
import 'rxjs/operator/delay';
import 'rxjs/operator/catch';

import { Restangular, RestangularModule } from 'ngx-restangular';
import { baseURL } from '../shared/baseurl';


@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular) { }

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
  }
  getLeader(id: number): Observable<Leader> {
    return this.restangular.one('leaders', id).get();
  }
  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({featured: true}).map(leader => leader[0])
  }
}
