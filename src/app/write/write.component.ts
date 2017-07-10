import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { COUNT_POST } from '../store/count/count.actions';
import { IAppState } from '../store';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})

export class WriteComponent {
  form: FormGroup;

  constructor(public fb: FormBuilder, public store: Store<IAppState>) {

    this.form = fb.group({
      number: ['', Validators.required],
    });

  }

  submitNumber(): void {

    if (this.form.valid) {

      this.store.dispatch({
        type: COUNT_POST,
        payload: this.form.value
      });

      this.form.reset();
    }
  }
}
