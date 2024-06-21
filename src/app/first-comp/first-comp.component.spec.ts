import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCompComponent } from './first-comp.component';

describe('FirstCompComponent', () => {
  let component: FirstCompComponent;
  let fixture: ComponentFixture<FirstCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstCompComponent]
    });
    fixture = TestBed.createComponent(FirstCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
