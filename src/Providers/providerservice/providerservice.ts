import { HttpClient } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionStorageService} from 'ngx-webstorage';
import * as moment from 'moment';

@Injectable()
export class ProviderserviceProvider {

  constructor(public http: Http,public session: SessionStorageService) {
    console.log('Hello ProviderserviceProvider Provider');
  }
  // Get Template
  getfunction(): Observable<object[]> {
    return this.http.get('')
      .map(this.extractData)
      .catch(this.handleError);
  }

login(param,param1):Observable<object[]>{
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const options = new RequestOptions({ headers: headers });

  let body = 
  {
    "doctor_id":param1,
    "business_id":param,
    "login_status":"login"
  }

  return this.http.post('https://doctorappnew.herokuapp.com/insert_doctor_login',body,options)
  .map(this.extractData)
  .catch(this.handleError);
}

  patientdetails(): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "business_id": this.session.retrieve('business_id'),
      "doctor_id": this.session.retrieve('doctor_id'),
      "business_date": moment().format("YYYY-MM-DD")
    }
    return this.http.post('https://doctorappnew.herokuapp.com/SelectAppoinment', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateappoinment(param,param1): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "token_status":param,
      "appointment_id": param1
    }
    return this.http.post('https://doctorappnew.herokuapp.com/UpdateAppoinment', body, options)
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
