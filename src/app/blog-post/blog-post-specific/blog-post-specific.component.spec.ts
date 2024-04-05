import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostSpecificComponent } from './blog-post-specific.component';

describe('BlogPostSpecificComponent', () => {
  let component: BlogPostSpecificComponent;
  let fixture: ComponentFixture<BlogPostSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogPostSpecificComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogPostSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
