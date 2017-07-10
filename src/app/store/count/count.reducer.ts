import { Action, ActionReducer } from '@ngrx/store';
import { COUNT_POST_SUCCESS, COUNT_GET_SUCCESS } from './count.actions';

export interface ICount {
  number: Array<{}>;
  total: number;
}

export const countReducer: ActionReducer<ICount> = (state: ICount, action: Action): ICount => {

  switch (action.type) {

    case COUNT_GET_SUCCESS:
    case COUNT_POST_SUCCESS:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
};
