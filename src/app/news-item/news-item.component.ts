import { Component, OnInit, Input } from '@angular/core';

export interface NewsItem {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
}

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent implements OnInit {
  @Input() item: NewsItem;

  constructor() {}

  ngOnInit(): void {}
}
