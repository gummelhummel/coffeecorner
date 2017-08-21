import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JunkyComponent } from './junky.component';

describe('JunkyComponent', () => {
  let component: JunkyComponent;
  let fixture: ComponentFixture<JunkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
