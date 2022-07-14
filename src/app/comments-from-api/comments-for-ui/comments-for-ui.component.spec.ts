import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsForUIComponent } from './comments-for-ui.component';

describe('CommentsForUIComponent', () => {
  let component: CommentsForUIComponent;
  let fixture: ComponentFixture<CommentsForUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsForUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsForUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
