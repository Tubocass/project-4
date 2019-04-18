import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackInventoryComponent } from './track-inventory.component';

describe('TrackInventoryComponent', () => {
  let component: TrackInventoryComponent;
  let fixture: ComponentFixture<TrackInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
