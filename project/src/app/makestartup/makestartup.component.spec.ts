import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakestartupComponent } from './makestartup.component';

describe('MakestartupComponent', () => {
  let component: MakestartupComponent;
  let fixture: ComponentFixture<MakestartupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakestartupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakestartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
