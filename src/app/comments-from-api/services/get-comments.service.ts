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
  getPosts(): Observable<Comments[]> {
    return this.httpClient.get<Comments[]>(`${environment.api}posts`);
  }
}
