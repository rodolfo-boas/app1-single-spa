import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'micro-rod-app1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app1';
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
