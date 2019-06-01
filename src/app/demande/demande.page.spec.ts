import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandePage } from './demande.page';

describe('DemandePage', () => {
  let component: DemandePage;
  let fixture: ComponentFixture<DemandePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
