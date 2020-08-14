import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from '../service/blog.service';
import { Router } from '@angular/router';
import { Blog } from '../model/blog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  editBlogId: number
  editBlog: Blog; // blog to edit

  // create new blog
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
    private router: Router,
    private route: ActivatedRoute) {
    // If edit blog was selected, store the blog id from route parameter
    this.editBlogId = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    console.log(this.route.snapshot);
    this.initEditForm();
  }

  onFormSubmit() {
    console.log(this.blogForm.valid);
    console.log(this.blogForm.value);
    if (this.blogForm.valid) {
      if (this.editBlogId) {
        this.updateBlog();
      } else {
        this.addBlog();
      }
      // Return to homepage
      this.router.navigate(['']);
    } else {
      console.log(this.blogForm.valid);
    }
  }

  // Save new blog
  addBlog() {
    // Assign mew blog's id, date and default star rating
    this.blogForm.controls.id.setValue(this.getId() + 1);
    this.blogForm.controls.date.setValue(new Date());
    this.blogForm.controls.starRating.setValue(0);
    // Add new blog to Blogs list
    this.blogService.addBlog(this.blogForm.value);
  }

  // Used to generate id of new blog
  getId() {
    return Math.max.apply(Math, this.blogService.blogs.map(function (o) { return o.id; }));
  }

  // Getter for image preview
  get imageUrl() {
    return this.blogForm.value.imgUrl;
  }

  // ---- Edit blog ----
  initEditForm() {
    if (this.editBlogId) {
      // Get the blog from Blogservice
      this.getBlog();
      // Inserts blog data into form
      this.populateEditFields();
    }
  }

  private populateEditFields() {
    this.blogForm = new FormGroup({
      id: new FormControl(this.editBlog.id),
      title: new FormControl(this.editBlog.title, Validators.required),
      date: new FormControl(),
      imgUrl: new FormControl(this.editBlog.imgUrl, Validators.required),
      description: new FormControl(this.editBlog.description, Validators.required),
      starRating: new FormControl(this.editBlog.starRating)
    });

    this.blogForm.controls.title.setValue(this.editBlog.title);
    this.blogForm.controls.imgUrl.setValue(this.editBlog.imgUrl);
    this.blogForm.controls.description.setValue(this.editBlog.description);
  }

  private getBlog() {
    this.editBlog = this.blogService.getBlog(this.editBlogId);
  }

  updateBlog() {
    this.editBlog.title = this.blogForm.value.title;
    this.editBlog.imgUrl = this.blogForm.value.imgUrl;
    this.editBlog.description = this.blogForm.value.description;
    this.editBlog.date = new Date();
  }
}
