import { Component, OnInit, Input } from '@angular/core';

import { NewsItem } from '../news-list/news-list.component';

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
