import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRfmComponent } from './my-rfm.component';

describe('MyRfmComponent', () => {
  let component: MyRfmComponent;
  let fixture: ComponentFixture<MyRfmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRfmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
