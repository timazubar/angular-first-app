import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsListComponent } from './news-list/news-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsListComponent },
  { path: 'news/:url', component: NewsItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
