import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from '../service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  blogForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', Validators.required), // initial value is empty ''. HTML5 'required' field validator set
    date: new FormControl(),
    imgUrl: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    starRating: new FormControl()
  });

  constructor(
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    console.log(this.blogForm.valid);
    console.log(this.blogForm.value);
    console.log(typeof this.blogForm.value);
    if (this.blogForm.valid) {
      // Assign mew blog's id, date and default star rating
      this.blogForm.controls.id.setValue(this.getId() + 1);
      this.blogForm.controls.date.setValue(new Date());
      this.blogForm.controls.starRating.setValue(0);
      // Add new blog to Blogs list
      this.blogService.addBlog(this.blogForm.value);
      // Return to homepage
      this.router.navigate(['']);
    } else {
      console.log(this.blogForm.valid);
    }

  }

  getId() {
    return Math.max.apply(Math, this.blogService.blogs.map(function (o) { return o.id; }));
  }

  // Getter for image preview
  get imageUrl() {
    return this.blogForm.value.imgUrl;
  }
}
