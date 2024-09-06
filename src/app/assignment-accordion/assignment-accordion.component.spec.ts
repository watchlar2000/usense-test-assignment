import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentAccordionComponent } from './assignment-accordion.component';

describe('AssignmentAccordionComponent', () => {
  let component: AssignmentAccordionComponent;
  let fixture: ComponentFixture<AssignmentAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
