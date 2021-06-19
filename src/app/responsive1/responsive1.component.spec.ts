import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Responsive1Component } from './responsive1.component';

describe('Responsive1Component', () => {
  let component: Responsive1Component;
  let fixture: ComponentFixture<Responsive1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Responsive1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Responsive1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
