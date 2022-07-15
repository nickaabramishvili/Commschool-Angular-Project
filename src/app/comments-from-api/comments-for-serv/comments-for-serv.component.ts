import { Component, OnInit } from '@angular/core';
import { GetCommentsService } from '../services/get-comments.service';
@Component({
  selector: 'app-comments-for-serv',
  templateUrl: './comments-for-serv.component.html',
  styleUrls: ['./comments-for-serv.component.scss'],
})
export class CommentsForServComponent implements OnInit {
  constructor(public GetCommentsService: GetCommentsService) {}

  ngOnInit(): void {}
}
