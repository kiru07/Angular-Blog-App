import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../../model/blog';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() blog: Blog;

  constructor(private blogsService: BlogService) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.blogsService.deleteBlog(this.blog);
  }

}
