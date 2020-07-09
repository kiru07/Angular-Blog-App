import { Injectable } from '@angular/core';
import { Blog } from '../model/blog';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: Blog[] = []
  // blogs: Blog[] = [
  //   {
  //     id: 1,
  //     title: 'Get started with Angular',
  //     date: new Date(),
  //     imgUrl: 'assets/testimage.jpg',
  //     // imgUrl: 'https://unsplash.com/photos/dqRdtm2spBk',
  //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed similique magni expedita dolor unde!',
  //     starRating: 0,
  //   },

  //   {
  //     id: 2,
  //     title: 'How to make Pizza',
  //     date: new Date(),
  //     imgUrl: 'assets/testimage2.jpg',
  //     // imgUrl: 'https://unsplash.com/photos/x00CzBt4Dfk',
  //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed similique magni expedita dolor unde!',
  //     starRating: 2,
  //   },
  //   {
  //     id: 3,
  //     title: 'AWS for beginners',
  //     date: new Date(),
  //     imgUrl: 'assets/testimage3.jpg',
  //     // imgUrl: 'https://unsplash.com/photos/mj2NwYH3wBA',
  //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed similique magni expedita dolor unde!',
  //     starRating: 0,
  //   },

  // ]

  constructor(
    private http: HttpClient // HttpClient service to make http requests
  ) {
    this.loadBlogs();

  }

  // getBlogs(): void {
  //   this.http.get('https://run.mocky.io/v3/1cd358f8-066c-41f6-a807-860c351e495f').pipe(catchError(this.handleError)).subscribe((val: Blog[]) => {
  //     this.blogs = val;
  //   });
  // }

  getBlogs(): Observable<Blog[]> {
    let url = 'https://run.mocky.io/v3/1cd358f8-066c-41f6-a807-860c351e495f';
    return this.http.get<Blog[]>(url);
  }

  loadBlogs(): void {
    console.log('called');
    this.getBlogs().pipe(catchError(this.handleError)).subscribe((blogs: Blog[]) => this.blogs = blogs);
  }

  deleteBlog(blog: Blog): void {
    let index = this.blogs.indexOf(blog);
    if (index != -1) {
      this.blogs.splice(index, 1);
    }
  }

  getBlog(id: number): Blog {
    return this.blogs.find(blog => blog.id === id);
  }

  addBlog(blog: Blog) {
    this.blogs.push(blog);
    console.log(this.blogs);
  }

  private handleError(error: Response | any) {
    return null
  }
}
