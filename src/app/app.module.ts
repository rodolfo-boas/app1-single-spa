import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { Exemplo1Component } from './exemplo1/exemplo1.component';
import { environment } from 'src/environments/environment';
import { APP_BASE_HREF } from '@angular/common';

const ROUTES_MICRO_APP: Routes = [
  {
    path: '',
    component: Exemplo1Component
  },
  {
    path: '**',
    component: EmptyRouteComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    Exemplo1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES_MICRO_APP)
  ],
  providers: [    {
    provide: APP_BASE_HREF,
    useValue: environment.appBaseHref // tem que ser a mesma route do base-app
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
