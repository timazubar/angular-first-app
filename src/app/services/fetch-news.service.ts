import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { NewsList } from '../news-list/news-list.component';

@Injectable({
  providedIn: 'root',
})
export class FetchNewsService {
  BASE_URL = 'https://newsapi.org/v2/top-headlines';
  API_KEY = '545054ab22e9474b82aed84d211dcf1b';

  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get(
      `${this.BASE_URL}?country=us&pageSize=5&apiKey=${this.API_KEY}`
    );
  }
}
