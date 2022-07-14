import { Component, OnInit } from '@angular/core';
import { GetCommentsService } from '../services/get-comments.service';
@Component({
  selector: 'app-comments-wrapper',
  templateUrl: './comments-wrapper.component.html',
  styleUrls: ['./comments-wrapper.component.scss'],
})
export class CommentsWrapperComponent implements OnInit {
  constructor(private GetCommentsService: GetCommentsService) {
    this.GetCommentsService.getPosts().subscribe((data) => console.log(data));
  }

  ngOnInit(): void {}
}
