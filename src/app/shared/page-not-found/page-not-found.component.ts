import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onBackHome() {
    this.router.navigate(['']);
    // shemomaqvs servisi da navigacias vuketeb sawyis carie lroutze anu homeze navigate ti string shemidzlai shevkra amsivshi da byurl pirdapir stirngs vawvdi
  }
}
