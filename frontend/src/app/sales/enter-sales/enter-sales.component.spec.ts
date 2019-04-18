import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterSalesComponent } from './enter-sales.component';

describe('EnterSalesComponent', () => {
  let component: EnterSalesComponent;
  let fixture: ComponentFixture<EnterSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
