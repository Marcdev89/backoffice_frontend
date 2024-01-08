import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUsersComponent } from './no-users.component';

describe('NoUsersComponent', () => {
  let component: NoUsersComponent;
  let fixture: ComponentFixture<NoUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
