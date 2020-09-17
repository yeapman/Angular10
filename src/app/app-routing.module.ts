import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {PostcComponent} from './postc/postc.component';
import {HomeComponent} from './home/home.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent, children: [{path: 'extra', component: AboutExtraComponent}]},
  {path: 'posts', component: PostcComponent, canActivate: [AuthGuard]},
  {path: 'posts/:id', component: PostcComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
