import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampsComponent } from './stamps.component';

describe('StampsComponent', () => {
  let component: StampsComponent;
  let fixture: ComponentFixture<StampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
