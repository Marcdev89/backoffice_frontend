import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicencesListComponent } from './licences-list.component';

describe('LicencesListComponent', () => {
  let component: LicencesListComponent;
  let fixture: ComponentFixture<LicencesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicencesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LicencesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
