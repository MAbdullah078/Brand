import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfmDetailComponent } from './rfm-detail.component';

describe('RfmDetailComponent', () => {
  let component: RfmDetailComponent;
  let fixture: ComponentFixture<RfmDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfmDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});