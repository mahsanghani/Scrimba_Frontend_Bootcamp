import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredbotComponent } from './boredbot.component';

describe('BoredbotComponent', () => {
  let component: BoredbotComponent;
  let fixture: ComponentFixture<BoredbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoredbotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoredbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
