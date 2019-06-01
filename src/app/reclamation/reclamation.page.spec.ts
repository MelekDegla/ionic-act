import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationPage } from './reclamation.page';

describe('ReclamationPage', () => {
  let component: ReclamationPage;
  let fixture: ComponentFixture<ReclamationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
