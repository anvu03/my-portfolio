import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ResumeComponent} from './resume.component';
import {HomeComponent} from './home.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
