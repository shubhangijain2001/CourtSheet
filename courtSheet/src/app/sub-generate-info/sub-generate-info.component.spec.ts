import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGenerateInfoComponent } from './sub-generate-info.component';

describe('SubGenerateInfoComponent', () => {
  let component: SubGenerateInfoComponent;
  let fixture: ComponentFixture<SubGenerateInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubGenerateInfoComponent]
    });
    fixture = TestBed.createComponent(SubGenerateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
