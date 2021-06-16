import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenges4Component } from './challenges4.component';

describe('Challenges4Component', () => {
  let component: Challenges4Component;
  let fixture: ComponentFixture<Challenges4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challenges4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Challenges4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
