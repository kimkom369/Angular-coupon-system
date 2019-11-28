// tslint:disable-next-line: semicolon
import {Component} from '@angular/core'
// tslint:disable-next-line: semicolon
import {Subscription} from 'rxjs'
// tslint:disable-next-line: semicolon
import {MediaChange, ObservableMedia} from '@angular/flex-layout'
// tslint:disable-next-line: semicolon
import {AuthorisationService} from '../../services/authorisation.service'
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  date = new DatePipe('en-US').transform(new Date(), 'EEEE, MMMM d, y');

  opened = true;
  over = 'side';

  watcher: Subscription;

  constructor(media: ObservableMedia, public auth: AuthorisationService) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
  }

}
