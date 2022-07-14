import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsForServComponent } from './comments-for-serv.component';

describe('CommentsForServComponent', () => {
  let component: CommentsForServComponent;
  let fixture: ComponentFixture<CommentsForServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsForServComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsForServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
