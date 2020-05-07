import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  private url = "api/Subscribers";

  constructor(private http: HttpClient) { }

  getSubsribers() {
    return this.http.get(this.url);
  }

  getSubsriberByID(id: number) {
    return this.http.get(this.url + "/" + id);
  }

  addSubsriber(value: SubsriberOfMyBlog) {
    return this.http.post(this.url, value);
  }

  updateSubsriber(value: SubsriberOfMyBlog) {
    return this.http.put(this.url, value);
  }
}


export class SubsriberOfMyBlog {
  constructor(
    id_subscriber: number,
    email: string,
    name_of_subscriber: string) {}
}