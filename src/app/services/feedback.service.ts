import { Injectable } from '@angular/core';
import { Restangular, RestangularModule } from 'ngx-restangular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/operator/delay';
import 'rxjs/operator/catch';
import { Feedback } from '../shared/feedback';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedback(feedback: Feedback) {
    return this.restangular.all('feedback').post(feedback);
  }

}
