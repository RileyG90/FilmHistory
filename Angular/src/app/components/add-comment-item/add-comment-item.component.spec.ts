import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentItemComponent } from './add-comment-item.component';

describe('AddCommentItemComponent', () => {
  let component: AddCommentItemComponent;
  let fixture: ComponentFixture<AddCommentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
