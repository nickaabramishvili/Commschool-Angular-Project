import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Comments } from '../models/comments.model';
@Component({
  selector: 'app-comments-for-ui',
  templateUrl: './comments-for-ui.component.html',
  styleUrls: ['./comments-for-ui.component.scss'],
})
export class CommentsForUIComponent implements OnInit, OnChanges {
  @Input('GetCommentsService') GetCommentsService: string[] | any;
  showTxtAfterDelete = false;
  commentsList: Comments[] = [];
  constructor() {}
  onLoadComments() {
    this.GetCommentsService.getPosts().subscribe(
      (data: any) => (this.commentsList = data)
    );
  }
  onPostComments() {
    this.GetCommentsService.postPosts().subscribe();
  }
  onDeleteComments(id: number) {
    this.GetCommentsService.deletePosts(id).subscribe();
    this.showTxtAfterDelete = !this.showTxtAfterDelete;
  }

  ngOnInit(): void {}
  ngOnChanges() {
    console.log(this.GetCommentsService);
    console.log('from comments-for-ui');
  }
}
