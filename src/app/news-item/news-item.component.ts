import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router,
  RouterLinkActive,
} from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { FetchNewsService } from '../services/fetch-news.service';

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
export class NewsItemComponent implements OnInit, OnDestroy {
  @Input() item: NewsItem;

  articles: NewsItem[];

  routerSub: Subscription;
  getByIdSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private fetchNewsService: FetchNewsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routerSub = this.route.params.subscribe((params) => {
      this.getArticleById(params.url);
    });
  }

  goToNews(): void {
    this.router.navigate(['/news']);
  }

  getArticleById(url): void {
    this.getByIdSub = this.fetchNewsService
      .getData()
      .pipe(
        map((data) => {
          return data.articles.find((a) => {
            console.log(a.url.includes(url));
            return a.url.includes(url);
          });
        })
      )
      .subscribe((article) => {
        this.item = article;
        console.log(this.item);
      });
  }

  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }

    if (this.getByIdSub) {
      this.getByIdSub.unsubscribe();
    }
  }
}
