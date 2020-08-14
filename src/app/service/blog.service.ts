import { Injectable } from '@angular/core';
import { Blog } from '../model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: Blog[] = [
    {
      id: 1,
      title: 'Get started with Angular',
      date: new Date(),
      imgUrl: 'assets/testimage.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed similique magni expedita dolor unde!',
      starRating: 0,
    },

    {
      id: 2,
      title: 'How to make Pizza',
      date: new Date(),
      imgUrl: 'assets/testimage2.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed similique magni expedita dolor unde!',
      starRating: 2,
    },
    {
      id: 3,
      title: 'AWS for beginners',
      date: new Date(),
      imgUrl: 'assets/testimage3.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed similique magni expedita dolor unde!',
      starRating: 0,
    },

  ]

  constructor() { }

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

  // TODO: Update Blog (ie: edit blog) - include update star rating value as well
}
