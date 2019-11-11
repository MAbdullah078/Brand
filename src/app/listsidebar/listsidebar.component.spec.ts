import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsidebarComponent } from './listsidebar.component';

describe('ListsidebarComponent', () => {
  let component: ListsidebarComponent;
  let fixture: ComponentFixture<ListsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
