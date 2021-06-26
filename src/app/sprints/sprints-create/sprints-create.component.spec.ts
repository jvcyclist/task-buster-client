import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintsCreateComponent } from './sprints-create.component';

describe('SprintsCreateComponent', () => {
  let component: SprintsCreateComponent;
  let fixture: ComponentFixture<SprintsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
