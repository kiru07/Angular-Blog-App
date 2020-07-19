import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../../model/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() blog: Blog;

  constructor() { }

  ngOnInit(): void {
  }


}
