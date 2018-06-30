import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmailValidationService {

  readonly validatorBackend = '//localhost:8080/validator/emails';

  constructor(private http: HttpClient) {
  }


  getAll(page: number): Observable<any> {
    console.log('Invoking -> '.concat(this.validatorBackend.concat('?page=').concat('' + page)))
    return this.http.get(this.validatorBackend.concat('?page=').concat('' + page));
  }

  getOne(email: string): Observable<any> {
    console.log('Email value -> '.concat(email));
    const invocation = this.validatorBackend.concat('/check?email=').concat( email);
    console.log('Invoking -> '.concat(invocation))
    return this.http.get(invocation);
  }

}
