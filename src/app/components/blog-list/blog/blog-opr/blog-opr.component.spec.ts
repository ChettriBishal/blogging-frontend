import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOprComponent } from './blog-opr.component';

describe('BlogOprComponent', () => {
  let component: BlogOprComponent;
  let fixture: ComponentFixture<BlogOprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogOprComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogOprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
