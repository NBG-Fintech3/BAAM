import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectDocComponent } from './inspect-doc.component';

describe('InspectDocComponent', () => {
  let component: InspectDocComponent;
  let fixture: ComponentFixture<InspectDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
