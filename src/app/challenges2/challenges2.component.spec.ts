import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenges2Component } from './challenges2.component';

describe('Challenges2Component', () => {
  let component: Challenges2Component;
  let fixture: ComponentFixture<Challenges2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challenges2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Challenges2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
