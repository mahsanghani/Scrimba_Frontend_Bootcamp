import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCapstoneComponent } from './api-capstone.component';

describe('ApiCapstoneComponent', () => {
  let component: ApiCapstoneComponent;
  let fixture: ComponentFixture<ApiCapstoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCapstoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCapstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
