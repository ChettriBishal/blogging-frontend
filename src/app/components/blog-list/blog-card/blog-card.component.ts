import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css',
})
export class BlogCardComponent {
  @Input() blogId: number;
  @Input() blogTitle: string;
  @Input() blogContent: string;
  @Input() blogAuthor: string;

  constructor(private router: Router){}

  navigateToBlog() {
    this.router.navigate(['/blogs',this.blogId]);
  }
}
