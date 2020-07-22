import { NgModule } from '@angular/core';

import { NewsListComponent } from './news-list.component';
import { NewsItemComponent } from '../news-item/news-item.component';

@NgModule({
  declarations: [NewsListComponent, NewsItemComponent],
  imports: [],
  providers: [],
  bootstrap: [NewsListComponent],
})
export class AppModule {}
