import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStampPage } from './new-stamp.page';

describe('NewStampPage', () => {
  let component: NewStampPage;
  let fixture: ComponentFixture<NewStampPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStampPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStampPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
