import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenges1Component } from './challenges1.component';

describe('Challenges1Component', () => {
  let component: Challenges1Component;
  let fixture: ComponentFixture<Challenges1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challenges1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Challenges1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
