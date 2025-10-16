import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsThumbnail } from './news-thumbnail';

describe('NewsThumbnail', () => {
  let component: NewsThumbnail;
  let fixture: ComponentFixture<NewsThumbnail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsThumbnail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsThumbnail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
