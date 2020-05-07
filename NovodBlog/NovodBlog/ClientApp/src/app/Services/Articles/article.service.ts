import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  private url = "/api/Articles";

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(this.url);
  }

  getArticlesByID(id: number) {
    return this.http.get(this.url + "/"  + id);
  }

  addArticle(value: Article) {
    return this.http.post(this.url, value);
  }

  updateArticle(value: Article) {
    return this.http.put(this.url, value);
  }

  deleteArticle(id: number): Observable<any> {
    return this.http.delete(this.url + "/" + id);
  }
}

export class Article{
  id: number
  title: string
  subText: string
  text: string
  imgSource: string

  constructor(
    id: number,
    title: string,
    subText: string,
    text: string,
    imgSource: string) { }
}
