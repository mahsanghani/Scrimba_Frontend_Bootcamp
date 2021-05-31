import { TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search_bar.component';

describe('SearchBarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SearchBarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SearchBarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'scrimba2'`, () => {
    const fixture = TestBed.createComponent(SearchBarComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('scrimba2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SearchBarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('scrimba2 app is running!');
  });
});
