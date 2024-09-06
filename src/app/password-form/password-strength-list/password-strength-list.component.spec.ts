import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthListComponent } from './password-strength-list.component';

describe('PasswordStrengthListComponent', () => {
  let component: PasswordStrengthListComponent;
  let fixture: ComponentFixture<PasswordStrengthListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordStrengthListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordStrengthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
