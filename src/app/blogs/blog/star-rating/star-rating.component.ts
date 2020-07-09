import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/model/blog';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() blog: Blog;
  @Input() rating: number;
  totalRating = 5;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index) {
    if (this.rating == index + 1) {
      this.rating = index;
    } else {
      this.rating = index + 1;
    }
    // Update the starRating property of blog
    this.blog.starRating = this.rating;
  }

}
