import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCPUComponent } from './list.component';

describe('ListCPUComponent', () => {
  let component: ListCPUComponent;
  let fixture: ComponentFixture<ListCPUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCPUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCPUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
