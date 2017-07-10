import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/index';
import { Observable } from 'rxjs/Observable';

import { COUNT_GET } from '../store/count/count.actions'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent {

  count$: Observable<{}>;

  constructor(store: Store<IAppState>) {
    this.count$ = store.select('count');

    store.dispatch({
      type: COUNT_GET
    });
  }
}
