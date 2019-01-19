import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ValidateAnswerService {
  url = 'http://localhost:3000';
  constructor(private httpclient: HttpClient) { }

  validateAnswers(correct_answer, selectedOption) {
    const requestBody = {
      correct_answer: correct_answer,
      SelectedOption: selectedOption
    }
    return this.httpclient.post(`${this.url}/validate`, requestBody).pipe(map(res => {
      console.log(res);
      return res;
    })).pipe(catchError((err) => {
      return throwError(err);
    }));

  }
}
