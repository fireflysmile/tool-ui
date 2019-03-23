import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { delay, retry, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const MOCK_API_DELAY = 1000;

@Injectable()
export class DataService {

  APIEndpoint = environment.APIEndpoint;

  constructor(public http: HttpClient) { }

  get(file) {
    return this.http.get(this.APIEndpoint + file)
            .pipe(
              delay(MOCK_API_DELAY),
              retry(3), // retry a failed request up to 3 times
              catchError(this.handleError) // then handle the error
            );
  }

  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }
}
