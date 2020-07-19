import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

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
  }

}
