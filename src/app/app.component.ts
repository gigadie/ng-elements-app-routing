import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'ng-elements-app-routing';

  @Input('state') 
  set state(state: string) {
    console.log('app2 received state', state);
  }

  @Output() message = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {
  	this.message.emit('navigation to /app2/one');
  	this.router.navigateByUrl('/app2/two');
  	setTimeout(_ => this.message.emit('something happened in app2'), 5000);
  }

}
