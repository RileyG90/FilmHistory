import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCommentItemComponent } from './get-comment-item.component';

describe('GetCommentItemComponent', () => {
  let component: GetCommentItemComponent;
  let fixture: ComponentFixture<GetCommentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCommentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCommentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
