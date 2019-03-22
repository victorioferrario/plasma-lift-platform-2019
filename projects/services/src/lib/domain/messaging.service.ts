import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMessage } from './IMessage';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpMessagingClient {
  constructor(private http: HttpClient) {}
  getProtocal() {
    return 'https:' === document.location.protocol
      ? 'https://www'
      : 'http://www';
  }
  post(message: IMessage) {
    return this.http
      .post(
        this.getProtocal() + '.plasma-lift.net/scripts/webform_contact.php',
        message
      )
      .pipe(share());
  }
  programDetails(message: IMessage) {
    return this.http
      .post(
        this.getProtocal() +
          '.plasma-lift.net/scripts/webform_programdetails.php',
        message
      )
      .pipe(share());
  }
}
