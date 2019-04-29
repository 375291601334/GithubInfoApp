import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReposComponent } from './components/repos/repos.component';
import { RepoFullInfoComponent } from './components/repos/repo-full-info/repo-full-info.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: 'repos', component: ReposComponent },
  { path: 'user-info', component: UserInfoComponent },
  {
    path: 'repos/:id',
    component: RepoFullInfoComponent,
  },
  {
    path: '404',
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
