import { Injectable } from '@angular/core';
import { Logger } from './logger.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// @Injectable() 装饰器指出Angular可以在DI体系中使用此类。元数据providedIn: 'root'表示HeroService在整个应用程序中都是可见的
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private log: Logger, private http: HttpClient) { }

  getBwics() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiVFJBREVSIiwibmFtZSI6IjEyMzQ1NiIsImV4cCI6MTY4NzQ5MTE0OCwidXNlcklkIjoidGVzdC10cmFkZXIifQ.qpXvzorU0gJ5LYhu4VQj4ZWNj9ktQI3Naexc_-ap1EfpFW-1onkezdOWAJAA08XSkSVL8IVNM4DNQUJsibuZSQ'
      })
    };
    this.http.get('/api/v1/bwic/bwic-bid-details',httpOptions).subscribe(data => {
      console.log(data);
    });
  }

  getHeroes() {
    this.log.log(`hello, this is injected log`)
    return [''];
  }
}
