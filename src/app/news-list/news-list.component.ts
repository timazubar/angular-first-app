import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { FetchNewsService } from './../services/fetch-news.service';
import { NewsItem } from '../news-item/news-item.component';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

export interface NewsList {
  articles: NewsItem[];
  totalResults: number;
}

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit, OnDestroy {
  pageEvent: PageEvent;
  pageIndex: number;
  pageSize: number;

  totalResults: number;
  search = '';

  articles: NewsItem[];

  newsSub: Subscription;

  @Input() item: NewsItem;

  constructor(private fetchNewsService: FetchNewsService) {}

  ngOnInit(): void {
    // this.fetchNewsService
    //   .getArticles()
    //   .subscribe((data) => (this.articles = data['articles']));
    this.newsSub = this.fetchNewsService
      .getData()
      .subscribe((data) => (this.articles = data.articles));
  }

  ngOnDestroy(): void {
    if (this.newsSub) {
      this.newsSub.unsubscribe();
    }
  }
}
