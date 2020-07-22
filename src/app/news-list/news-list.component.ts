import { Component, OnInit } from '@angular/core';

export interface NewsItem {
  id?: number;
  title: string;
  source: string;
  urlToImage?: string;
}

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  search = '';

  news: NewsItem[] = [
    {
      id: 1,
      title: 'Hey Ho',
      source: 'Source1',
      urlToImage: 'http://gregfranko.com/images/JavaScript-logo-small.png',
    },
    {
      id: 2,
      title: 'Trump Ho',
      source: 'Source2',
      urlToImage: 'http://gregfranko.com/images/JavaScript-logo-small.png',
    },
    {
      id: 3,
      title: 'Ho Hey',
      source: 'Source3',
      urlToImage: 'http://gregfranko.com/images/JavaScript-logo-small.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
