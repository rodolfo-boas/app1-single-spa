import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { restoreView } from '@angular/core/src/render3';

@Component({
  selector: 'micro-rod-app1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  title = 'app1';

  valorForm: BehaviorSubject<any> = new BehaviorSubject(null);
  valorForm$: Observable<any> = this.valorForm.asObservable();

  onSubmit(f: NgForm) {
    console.log(f)
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    this.valorForm.next(f.value)
  }

  lerObservable() {
    this.valorForm$.subscribe(
      retorno => {
        console.log(retorno)
      }
    )
  }

}
