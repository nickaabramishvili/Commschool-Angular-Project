import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comments } from '../models/comments.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetCommentsService {
  constructor(private httpClient: HttpClient) {}
  // wamogeba 100 postis
  getPosts(): Observable<Comments[]> {
    return this.httpClient.get<Comments[]>(`${environment.api}posts`);
  }
  // aweva postis 101 cali
  postPosts(): Observable<Comments[]> {
    return this.httpClient.post<Comments[]>(`${environment.api}posts`, {});
  }
  // washla 1 postis
  deletePosts(id: number) {
    return this.httpClient.delete(`${environment.api}posts/${id}`);
  }
}
