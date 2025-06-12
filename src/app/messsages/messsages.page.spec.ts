import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MesssagesPage } from './messsages.page';

describe('MesssagesPage', () => {
  let component: MesssagesPage;
  let fixture: ComponentFixture<MesssagesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MesssagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
