import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RegistartionService {

  url = 'http://localhost:8000/users';
  //url2 = 'http://localhost:3000/payments';
  constructor(private http: Http) { }
  
  getRegistartion(): Observable<any[]> {
    return this.http.get(this.url)
      .map((res: Response) => res.json() as any[])
      .catch((error: any) => Observable.throw(error));
  }
}
