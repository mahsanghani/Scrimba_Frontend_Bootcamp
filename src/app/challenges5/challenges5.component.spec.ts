import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenges5Component } from './challenges5.component';

describe('Challenges5Component', () => {
  let component: Challenges5Component;
  let fixture: ComponentFixture<Challenges5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challenges5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Challenges5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
