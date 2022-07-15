import { Component, OnInit } from '@angular/core';
import { GetCommentsService } from '../services/get-comments.service';
import { Comments } from '../models/comments.model';

@Component({
  selector: 'app-comments-wrapper',
  templateUrl: './comments-wrapper.component.html',
  styleUrls: ['./comments-wrapper.component.scss'],
})
export class CommentsWrapperComponent implements OnInit {
  commentsList: Comments[] = [];
  constructor(private GetCommentsService: GetCommentsService) {}
  onLoadComments() {
    this.GetCommentsService.getPosts().subscribe(
      (data) => (this.commentsList = data)
    );
  }
  onPostComments() {
    this.GetCommentsService.postPosts().subscribe();
  }
  onDeleteComments(id: number) {
    this.GetCommentsService.deletePosts(id).subscribe();
  }
  ngOnInit(): void {}
}
