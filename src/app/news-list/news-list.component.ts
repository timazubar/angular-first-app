import { Component, Input, OnInit } from '@angular/core';

import { FetchNewsService } from './../services/fetch-news.service';
import { NewsItem } from '../news-item/news-item.component';
import { PageEvent } from '@angular/material/paginator';

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
  pageEvent: PageEvent;
  pageIndex: number;
  pageSize: number;

  totalResults: number;
  search = '';
  articles: NewsItem[];

  @Input() item: NewsItem;

  constructor(private fetchNewsService: FetchNewsService) {}

  ngOnInit(): void {
    // this.fetchNewsService
    //   .getArticles()
    //   .subscribe((data) => (this.articles = data['articles']));
    this.getArticles();
    this.getTotalResults();
  }

  getArticles(): void {
    this.fetchNewsService.getArticles().then((data) => (this.articles = data));
  }

  getTotalResults(): void {
    this.fetchNewsService
      .getTotalResults()
      .then((data) => (this.totalResults = data));
  }

  // getPaginatorData(event) {
  //   this.pageIndex = event.pageIndex;
  //   this.pageSize = event.pageSize;
  //   this.totalResults = event.totalResults;
  //   return event;
  // }
}
