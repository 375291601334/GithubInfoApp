import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReposComponent } from './components/repos/repos.component';
import { RepoItemComponent } from './components/repos/repo-item/repo-item.component';
import { ColorsDirective } from './directives/colors.directive';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { RepoFullInfoComponent } from './components/repos/repo-full-info/repo-full-info.component';
import { FilterPipe } from './pipes/filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReposComponent,
    RepoItemComponent,
    ColorsDirective,
    FilterPipe,
    UserInfoComponent,
    RepoFullInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
