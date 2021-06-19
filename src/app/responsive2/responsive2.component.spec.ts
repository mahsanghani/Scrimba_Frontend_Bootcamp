import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Responsive2Component } from './responsive2.component';

describe('Responsive2Component', () => {
  let component: Responsive2Component;
  let fixture: ComponentFixture<Responsive2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Responsive2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Responsive2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
