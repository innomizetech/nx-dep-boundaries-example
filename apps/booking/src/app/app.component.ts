import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@nx-dep-boundaries-example/api-interfaces';
import { setCookie } from '@nx-dep-boundaries-example/shared/ui-util';

@Component({
  selector: 'nx-dep-boundaries-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {
    setCookie('app-visited', 'true');
  }
}
