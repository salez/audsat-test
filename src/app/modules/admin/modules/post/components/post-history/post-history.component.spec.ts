import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHistoryComponent } from './post-history.component';

describe('PostHistoryComponent', () => {
  let component: PostHistoryComponent;
  let fixture: ComponentFixture<PostHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostHistoryComponent]
    });
    fixture = TestBed.createComponent(PostHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
