import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenges3Component } from './challenges3.component';

describe('Challenges3Component', () => {
  let component: Challenges3Component;
  let fixture: ComponentFixture<Challenges3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challenges3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Challenges3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
