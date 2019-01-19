import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
@Injectable()
export class QuestionsService {
    private url = 'http://localhost:3000';
    constructor(private httpClient: HttpClient) {

    }
    getquestions() {
        return this.httpClient.get(`${this.url}/questions`).pipe(map(res=>{
          console.log(res);
          return res;
        })).pipe(catchError((err)=>{
          return throwError(err);
        }));
      }
     
    }