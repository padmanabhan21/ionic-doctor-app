import { HttpClient } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { SessionStorageService} from 'ngx-webstorage';

/*
  Generated class for the ProviderserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderserviceProvider {

  constructor(public http: Http) {
    console.log('Hello ProviderserviceProvider Provider');
  }
  // Get Template
  getfunction(): Observable<object[]> {
    return this.http.get('')
      .map(this.extractData)
      .catch(this.handleError);
  }





  patientdetails(): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "business_id": 102,
    "doctor_id": "vani116",
    "business_date":"2019-02-18"
 }
    return this.http.post('https://doctorappnew.herokuapp.com/SelectAppoinment', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(JSON.stringify(body));
    return body;
  }



  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
