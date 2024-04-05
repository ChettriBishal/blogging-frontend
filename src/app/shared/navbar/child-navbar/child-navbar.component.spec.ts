import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNavbarComponent } from './child-navbar.component';

describe('ChildNavbarComponent', () => {
  let component: ChildNavbarComponent;
  let fixture: ComponentFixture<ChildNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
