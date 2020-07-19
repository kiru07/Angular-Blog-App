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
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed similique magni expedita dolor unde!'
    },

    {
      id: 2,
      title: 'How to make Pizza',
      date: new Date(),
      imgUrl: 'assets/testimage2.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed similique magni expedita dolor unde!'
    },
    {
      id: 3,
      title: 'AWS for beginners',
      date: new Date(),
      imgUrl: 'assets/testimage3.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed similique magni expedita dolor unde!'
    },

  ]

  constructor() { }
}
