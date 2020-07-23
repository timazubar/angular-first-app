import { Component, OnInit } from '@angular/core';

import { FetchNewsService } from './../services/fetch-news.service';
import { NewsItem } from '../news-item/news-item.component';

export interface NewsList {
  articles: NewsItem[];
  totalResults: number;
}

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  search = '';

  articles: NewsItem[];

  constructor(private fetchNewsService: FetchNewsService) {}

  ngOnInit() {
    this.fetchNewsService
      .getArticles()
      .subscribe((data) => (this.articles = data['articles']));
  }
}
