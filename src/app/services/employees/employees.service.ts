import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class employeeService {
    url = 'http://localhost:3000/employees';
    constructor(private http: Http) { }
    getlist(): Observable<any> {
        return this.http.get(this.url).map((response: Response) => response.json() as Observable<any>).catch((error: any) => Observable.throw(error));
    }
}