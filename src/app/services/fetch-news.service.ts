import { filter, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterLinkActive } from '@angular/router';

// import { NewsList } from '../news-list/news-list.component';

@Injectable({
  providedIn: 'root',
})
export class FetchNewsService {
  BASE_URL = 'https://newsapi.org/v2/top-headlines';
  API_KEY = '545054ab22e9474b82aed84d211dcf1b';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const url = `${this.BASE_URL}?country=ua&pageSize=10&apiKey=${this.API_KEY}`;
    return this.http.get(url);
  }

  // getArticleByUrl(url: RouterLinkActive): Observable<any> {
  //   return this.getData().pipe(
  //     tap(({ articles }) => console.log(articles)),
  //     filter(({ articles }) => articles.find((a) => a.url.includes(url)))
  //   );
  // }
}
