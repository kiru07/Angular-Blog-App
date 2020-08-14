import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs = null;

  constructor(
    public blogsService: BlogService,
    private router: Router) { }

  ngOnInit(): void {
    this.blogs = this.blogsService.blogs;
  }

  // Navigate to ViewBlog component when the blog card is clicked
  onClickBlog(id: number) {
    this.router.navigate(['view-blog', id]);
  }

  // Navigate to CreateBlog component when the button is clicked
  onClickCreate() {
    this.router.navigate(['create-blog']);
  }

}
