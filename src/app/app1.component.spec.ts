import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the counter to 0', () => {
    expect(component.counter).toEqual(0);
  });

  describe('incDec', () => {
    it('should increment the counter by 1 when type is "add"', () => {
      component.incDec('add');
      expect(component.counter).toEqual(1);
    });

    it('should decrement the counter by 1 when type is "subtract"', () => {
      component.incDec('subtract');
      expect(component.counter).toEqual(-1);
    });
  });
});
