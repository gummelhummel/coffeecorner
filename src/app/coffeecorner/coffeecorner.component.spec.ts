import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeecornerComponent } from './coffeecorner.component';

describe('CoffeecornerComponent', () => {
  let component: CoffeecornerComponent;
  let fixture: ComponentFixture<CoffeecornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeecornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeecornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
