import { Pipe, PipeTransform } from '@angular/core';

import { NewsItem } from '../news-item/news-item.component';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(news: NewsItem[], search: string = ''): NewsItem[] {
    if (!search.trim()) {
      return news;
    } else {
      return news.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
    }
  }
}
