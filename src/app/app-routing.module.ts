import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {PostcComponent} from './postc/postc.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent, children: [{path: 'extra', component: AboutExtraComponent}]},
  {path: 'posts', component: PostcComponent},
  {path: 'posts/:id', component: PostcComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
