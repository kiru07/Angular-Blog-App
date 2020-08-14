import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../model/blog';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {

  currentBlog: Blog;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog(): void {
    // Get blog id from route parameter
    const id = +this.route.snapshot.paramMap.get('id');
    // Find blog with id using blog service
    if (!this.blogService.getBlog(id)) {
      this.blogService.getBlogs().subscribe(blogs => {
        this.blogService.blogs = blogs;
        this.currentBlog = this.blogService.getBlog(id);
      });
    } else {
      console.log('else');
      this.currentBlog = this.blogService.getBlog(id);
    }

    // console.log(this.currentBlog);
  }

}
