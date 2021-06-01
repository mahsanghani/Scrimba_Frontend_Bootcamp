import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LizardsComponent } from './lizards.component';

describe('LizardsComponent', () => {
  let component: LizardsComponent;
  let fixture: ComponentFixture<LizardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LizardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LizardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
