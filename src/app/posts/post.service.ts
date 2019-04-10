import {Post } from './post.model';
import { Injectable } from '@angular/core';

// Provides this service (1 isntance) at the root rather than adding in module.
@Injectable({providedIn: 'root'})

export class PostsService {
  private posts: Post[] = [];

  getPost() {
    return [...this.posts];
  }

  addPost(title: string, content: string){
    const post : Post = {title: title, content: content};
    this.posts.push(post);
  }
}
