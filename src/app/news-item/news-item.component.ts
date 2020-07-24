import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
export class NewsItemComponent implements OnInit {
  @Input() item: any;

  articles: NewsItem[];

  constructor(
    private route: ActivatedRoute,
    private fetchNewsService: FetchNewsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // this.newsItem = this.getArticleByUrl(params.url);
      this.item = this.getArticleByUrl(params.url);
    });
  }

  getArticleByUrl(url): Promise<NewsItem> {
    const response = this.fetchNewsService
      .getArticles()
      .then((data) => (this.articles = data))
      .then(() => this.articles.find((a) => a.url.includes(url)))
      .then((data) => (this.item = data));

    return response;
  }

  goToNews(): void {
    this.router.navigate(['/news']);
  }

  // getArticleByUrl(url) {
  //   return this.fetchNewsService
  //     .getArticles()
  //     .subscribe((data) => (this.articles = data['articles']))
  //     .find((a) => a.url.includes(url));
  // }
}
