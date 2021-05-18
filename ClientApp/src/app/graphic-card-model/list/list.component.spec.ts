import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicCardModelComponent } from './list.component';

describe('GraphicCardModelComponent', () => {
  let component: GraphicCardModelComponent;
  let fixture: ComponentFixture<GraphicCardModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphicCardModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicCardModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
