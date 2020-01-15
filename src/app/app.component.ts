import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { singleSpaPropsSubject } from "../single-spa/single-spa-props";


@Component({
  selector: 'micro-rod-app1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app1';

  /**
   * Get singleSpaProps
   */
  spaPropsSubscription: Subscription = null;

  /**
   * Form
   */
  fooValue = '';
  setFooValueFn;
  setFooValue(value: string): void {
    this.setFooValueFn(value);
  }


  // Lifecycle
  ngOnInit() {
    console.log('app1/ngOnInit');
    this.spaPropsSubscription = singleSpaPropsSubject.asObservable().subscribe(
      (props: any) => {
        console.log('spa props', props);
        this.setFooValueFn = props.setFoo;
      },
      err => {
        console.error('spaPropsSubscription FAILED!', err.message)
      }
    );
  }

  ngOnDestroy() {
    this.spaPropsSubscription.unsubscribe();
  }
}
