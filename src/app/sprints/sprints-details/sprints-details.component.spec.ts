import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintsDetailsComponent } from './sprints-details.component';

describe('SprintsDetailsComponent', () => {
  let component: SprintsDetailsComponent;
  let fixture: ComponentFixture<SprintsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
