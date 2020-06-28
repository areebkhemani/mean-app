import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdonationsComponent } from './viewdonations.component';

describe('ViewdonationsComponent', () => {
  let component: ViewdonationsComponent;
  let fixture: ComponentFixture<ViewdonationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdonationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
