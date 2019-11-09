import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleaccountComponent } from './googleaccount.component';

describe('GoogleaccountComponent', () => {
  let component: GoogleaccountComponent;
  let fixture: ComponentFixture<GoogleaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
