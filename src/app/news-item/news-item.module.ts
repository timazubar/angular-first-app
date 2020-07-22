import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { NewsItemComponent } from '../news-item/news-item.component';

@NgModule({
  declarations: [NewsItemComponent],
  imports: [MatCardModule],
  providers: [],
  bootstrap: [NewsItemComponent],
})
export class AppModule {}
