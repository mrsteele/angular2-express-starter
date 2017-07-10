import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { COUNT_POST, COUNT_POST_SUCCESS, COUNT_POST_FAIL, COUNT_GET, COUNT_GET_SUCCESS, COUNT_GET_FAIL } from './count.actions';

@Injectable()
export class CountEffects {

  @Effect()
  addCount$ = this.actions$
    .ofType(COUNT_POST)
    .switchMap((action: Action) => {

      return this.http.post('/api/count', action.payload)
        .map((response: Response) => response.json())
        .catch(() => Observable.of(({ type: COUNT_POST_FAIL })))
        .map((response) => ({type: COUNT_POST_SUCCESS, payload: response}));

    });

  @Effect()
  readCount$ = this.actions$
    .ofType(COUNT_GET)
    .switchMap((action: Action) => {

      return this.http.get('/api/count', action.payload)
        .map((response: Response) => response.json())
        .catch(() => Observable.of(({ type: COUNT_GET_FAIL })))
        .map((response) => ({type: COUNT_GET_SUCCESS, payload: response}));

    });

  constructor(private actions$: Actions, private http: Http) {}
}
